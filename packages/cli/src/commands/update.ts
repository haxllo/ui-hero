import * as p from '@clack/prompts';
import chalk from 'chalk';
import { getInstalledComponents, getLicenseKey } from '../utils/config.js';
import { fetchRegistry } from '../utils/registry.js';
import { downloadComponent, detectComponentsDir } from '../utils/download.js';
import { addInstalledComponent } from '../utils/config.js';

export async function updateCommand() {
  console.log('');
  p.intro(chalk.bgCyan(chalk.black(' Update Components ')));

  // Get installed components
  const installed = await getInstalledComponents();

  if (installed.length === 0) {
    p.log.warn('No components installed yet');
    console.log(chalk.dim('\nInstall components first:'));
    console.log(chalk.cyan('  npx ui-hero add hero-section-01'));
    console.log('');
    process.exit(0);
  }

  // Fetch latest registry
  const s = p.spinner();
  s.start('Checking for updates...');
  const registry = await fetchRegistry();
  const licenseKey = await getLicenseKey();
  s.stop();

  // Check for updates
  const updates = [];
  for (const component of installed) {
    const latest = registry.components[component.name];
    if (latest && latest.version !== component.version) {
      updates.push({
        name: component.name,
        currentVersion: component.version,
        latestVersion: latest.version,
        metadata: latest
      });
    }
  }

  if (updates.length === 0) {
    p.log.success('All components are up to date!');
    console.log('');
    process.exit(0);
  }

  // Show available updates
  console.log(chalk.bold('\nUpdates available:\n'));
  for (const update of updates) {
    console.log(`  ${update.metadata.displayName}`);
    console.log(chalk.dim(`  ${update.currentVersion} → ${chalk.green(update.latestVersion)}`));
  }
  console.log('');

  const shouldUpdate = await p.confirm({
    message: `Update ${updates.length} component(s)?`,
    initialValue: true
  });

  if (p.isCancel(shouldUpdate) || !shouldUpdate) {
    p.cancel('Update cancelled');
    process.exit(0);
  }

  // Update components
  const targetDir = await detectComponentsDir();
  console.log('');

  for (const update of updates) {
    await downloadComponent(update.metadata, licenseKey || 'free', targetDir);
    
    // Update installed component record
    await addInstalledComponent({
      name: update.name,
      version: update.latestVersion,
      installedAt: new Date().toISOString()
    });
  }

  console.log('');
  p.outro(chalk.green(`✓ Successfully updated ${updates.length} component(s)`));
  console.log('');
}

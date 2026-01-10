import * as p from '@clack/prompts';
import chalk from 'chalk';
import { getLicenseKey } from '../utils/config.js';
import { validateLicense, getFreeTierValidation } from '../utils/license.js';
import { fetchRegistry, getAllComponents } from '../utils/registry.js';

export async function listCommand() {
  console.log('');
  p.intro(chalk.bgCyan(chalk.black(' UI Hero Components ')));

  // Get license info
  const licenseKey = await getLicenseKey();
  let tier: 'free' | 'pro' = 'free';

  if (licenseKey) {
    const validation = await validateLicense(licenseKey);
    if (validation.valid) {
      tier = validation.tier;
    }
  }

  // Fetch registry
  const s = p.spinner();
  s.start('Loading components...');
  const registry = await fetchRegistry();
  s.stop();

  const components = getAllComponents(registry);

  console.log(chalk.bold(`\nYour plan: ${tier === 'pro' ? chalk.green('PRO') : chalk.yellow('FREE')}\n`));

  // Group by tier
  const freeComponents = components.filter(c => c.tier === 'free');
  const proComponents = components.filter(c => c.tier === 'pro');

  if (freeComponents.length > 0) {
    console.log(chalk.green.bold('🆓 FREE COMPONENTS'));
    for (const component of freeComponents) {
      console.log(`  ${chalk.green('✓')} ${component.displayName}`);
      console.log(chalk.dim(`     ${component.name}`));
    }
    console.log('');
  }

  if (proComponents.length > 0) {
    console.log(chalk.yellow.bold('✨ PRO COMPONENTS'));
    for (const component of proComponents) {
      const icon = tier === 'pro' ? chalk.green('✓') : chalk.dim('🔒');
      const name = tier === 'pro' ? component.displayName : chalk.dim(component.displayName);
      console.log(`  ${icon} ${name}`);
      console.log(chalk.dim(`     ${component.name}`));
    }
    console.log('');
  }

  if (tier === 'free') {
    console.log(chalk.dim('─'.repeat(50)));
    console.log(chalk.yellow('\n💡 Unlock all components with UI Hero Pro'));
    console.log(chalk.dim('   Visit: https://ui-hero.com/pricing\n'));
  }

  console.log(chalk.bold('Install components:'));
  console.log(chalk.cyan('  npx ui-hero add hero-section-01'));
  console.log(chalk.cyan('  npx ui-hero add pricing-section-01 features-section-01'));
  console.log('');

  p.outro(chalk.dim('Happy building! 🚀'));
}

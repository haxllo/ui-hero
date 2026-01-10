import * as p from '@clack/prompts';
import chalk from 'chalk';
import { getLicenseKey, saveLicenseKey } from '../utils/config.js';
import { validateLicense, getFreeTierValidation } from '../utils/license.js';
import { fetchRegistry, getAvailableComponents } from '../utils/registry.js';
import { downloadComponent, detectComponentsDir, isNextJsProject } from '../utils/download.js';
import { addInstalledComponent } from '../utils/config.js';
import type { LicenseValidation } from '../types.js';

export async function addCommand(requestedComponents: string[]) {
  console.log('');
  p.intro(chalk.bgCyan(chalk.black(' UI Hero ')));

  // Check if this is a Next.js project
  const isNext = await isNextJsProject();
  if (!isNext) {
    const shouldContinue = await p.confirm({
      message: 'This does not appear to be a Next.js project. Continue anyway?',
      initialValue: false
    });

    if (p.isCancel(shouldContinue) || !shouldContinue) {
      p.cancel('Installation cancelled');
      process.exit(0);
    }
  }

  // Get or prompt for license key
  let licenseKey = await getLicenseKey();
  let validation: LicenseValidation;

  if (!licenseKey) {
    const useLicense = await p.select({
      message: 'How would you like to proceed?',
      options: [
        { value: 'free', label: 'Use Free Tier', hint: '1 free component' },
        { value: 'enter', label: 'Enter License Key', hint: 'Pro access' },
        { value: 'buy', label: 'Buy License', hint: 'Visit website' }
      ]
    });

    if (p.isCancel(useLicense)) {
      p.cancel('Installation cancelled');
      process.exit(0);
    }

    if (useLicense === 'buy') {
      console.log('\n' + chalk.cyan('Purchase UI Hero Pro at: https://ui-hero.com/pricing'));
      process.exit(0);
    }

    if (useLicense === 'enter') {
      const key = await p.text({
        message: 'Enter your license key:',
        placeholder: 'XXXX-XXXX-XXXX-XXXX',
        validate: (value) => {
          if (!value) return 'License key is required';
        }
      });

      if (p.isCancel(key)) {
        p.cancel('Installation cancelled');
        process.exit(0);
      }

      licenseKey = key as string;
      
      const s = p.spinner();
      s.start('Validating license...');
      validation = await validateLicense(licenseKey);
      s.stop();

      if (!validation.valid) {
        p.log.error(validation.message || 'Invalid license key');
        process.exit(1);
      }

      await saveLicenseKey(licenseKey);
      p.log.success(`License verified! ${chalk.green(`(${validation.tier.toUpperCase()} tier)`)}`);
    } else {
      validation = getFreeTierValidation();
      p.log.info('Using free tier');
    }
  } else {
    // Validate existing license
    const s = p.spinner();
    s.start('Validating license...');
    validation = await validateLicense(licenseKey);
    s.stop();

    if (!validation.valid) {
      p.log.error('Your saved license key is invalid');
      process.exit(1);
    }
  }

  // Fetch registry
  const s = p.spinner();
  s.start('Fetching component registry...');
  const registry = await fetchRegistry();
  s.stop();

  // Get available components based on tier
  const availableComponents = getAvailableComponents(registry, validation.tier);

  // If components were specified, validate them
  let componentsToInstall = requestedComponents;

  if (componentsToInstall.length > 0) {
    // Validate requested components
    for (const name of componentsToInstall) {
      const component = registry.components[name];
      if (!component) {
        p.log.error(`Component '${name}' not found`);
        process.exit(1);
      }
      if (component.tier === 'pro' && validation.tier === 'free') {
        p.log.error(`Component '${name}' requires Pro license`);
        process.exit(1);
      }
    }
  } else {
    // Prompt for component selection
    const selected = await p.multiselect({
      message: 'Select components to install:',
      options: availableComponents.map(c => ({
        value: c.name,
        label: c.displayName,
        hint: c.tier === 'pro' ? '✨ PRO' : '🆓 FREE'
      })),
      required: true
    });

    if (p.isCancel(selected)) {
      p.cancel('Installation cancelled');
      process.exit(0);
    }

    componentsToInstall = selected as string[];
  }

  // Detect target directory
  const targetDir = await detectComponentsDir();

  // Download components
  console.log('');
  for (const name of componentsToInstall) {
    const component = registry.components[name];
    await downloadComponent(component, licenseKey || 'free', targetDir);
    
    // Track installed component
    await addInstalledComponent({
      name: component.name,
      version: component.version,
      installedAt: new Date().toISOString()
    });
  }

  // Success message
  console.log('');
  p.outro(chalk.green(`✓ Successfully installed ${componentsToInstall.length} component(s)`));
  
  console.log('\n' + chalk.bold('Next steps:'));
  console.log(chalk.dim('  1. Import components in your pages:'));
  console.log(chalk.cyan(`     import Hero from '@/components/ui-hero/hero-section-01'`));
  console.log(chalk.dim('  2. Use in your JSX:'));
  console.log(chalk.cyan(`     <Hero />`));
  console.log(chalk.dim('  3. Customize the code directly in the files'));
  console.log('');
}

import fs from 'fs/promises';
import path from 'path';
import ora from 'ora';
import type { ComponentMetadata } from '../types.js';

const COMPONENT_CDN_URL = process.env.UI_HERO_CDN_URL || 'https://ui-hero.vercel.app/api/components';

export async function downloadComponent(
  component: ComponentMetadata,
  licenseKey: string,
  targetDir: string
): Promise<void> {
  const spinner = ora(`Downloading ${component.displayName}...`).start();

  try {
    for (const file of component.files) {
      const url = `${COMPONENT_CDN_URL}/${file}`;
      
      const response = await fetch(url, {
        headers: {
          'X-License-Key': licenseKey || 'free'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to download ${file}: ${response.statusText}`);
      }

      const content = await response.text();
      
      // Create ui-hero directory in components
      const componentDir = path.join(targetDir, 'ui-hero');
      await fs.mkdir(componentDir, { recursive: true });
      
      const filePath = path.join(componentDir, file);
      await fs.writeFile(filePath, content, 'utf-8');
    }

    spinner.succeed(`Downloaded ${component.displayName}`);
  } catch (error) {
    spinner.fail(`Failed to download ${component.displayName}`);
    throw error;
  }
}

export async function detectComponentsDir(): Promise<string> {
  const cwd = process.cwd();
  
  // Check for Next.js app directory
  const appDir = path.join(cwd, 'app');
  const componentsInApp = path.join(cwd, 'components');
  const srcComponents = path.join(cwd, 'src', 'components');
  
  try {
    await fs.access(appDir);
    // Next.js App Router project
    try {
      await fs.access(componentsInApp);
      return componentsInApp;
    } catch {
      // Create components directory at root
      await fs.mkdir(componentsInApp, { recursive: true });
      return componentsInApp;
    }
  } catch {
    // Try src/components
    try {
      await fs.access(srcComponents);
      return srcComponents;
    } catch {
      // Default to components at root
      try {
        await fs.access(componentsInApp);
        return componentsInApp;
      } catch {
        await fs.mkdir(componentsInApp, { recursive: true });
        return componentsInApp;
      }
    }
  }
}

export async function isNextJsProject(): Promise<boolean> {
  try {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const content = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(content);
    return !!(packageJson.dependencies?.next || packageJson.devDependencies?.next);
  } catch {
    return false;
  }
}

import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import type { LocalConfig, InstalledComponent } from '../types.js';

const CONFIG_DIR = path.join(os.homedir(), '.ui-hero');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

async function ensureConfigDir() {
  try {
    await fs.mkdir(CONFIG_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
}

export async function getConfig(): Promise<LocalConfig> {
  await ensureConfigDir();
  
  try {
    const content = await fs.readFile(CONFIG_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    return {
      installedComponents: []
    };
  }
}

export async function saveConfig(config: LocalConfig): Promise<void> {
  await ensureConfigDir();
  await fs.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2));
}

export async function getLicenseKey(): Promise<string | undefined> {
  const config = await getConfig();
  return config.licenseKey;
}

export async function saveLicenseKey(key: string): Promise<void> {
  const config = await getConfig();
  config.licenseKey = key;
  await saveConfig(config);
}

export async function addInstalledComponent(component: InstalledComponent): Promise<void> {
  const config = await getConfig();
  const existing = config.installedComponents.findIndex(c => c.name === component.name);
  
  if (existing >= 0) {
    config.installedComponents[existing] = component;
  } else {
    config.installedComponents.push(component);
  }
  
  await saveConfig(config);
}

export async function getInstalledComponents(): Promise<InstalledComponent[]> {
  const config = await getConfig();
  return config.installedComponents;
}

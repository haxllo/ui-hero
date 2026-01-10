export interface ComponentMetadata {
  name: string;
  displayName: string;
  tier: 'free' | 'pro';
  dependencies: string[];
  files: string[];
  version: string;
}

export interface Registry {
  version: string;
  components: Record<string, ComponentMetadata>;
}

export interface LicenseValidation {
  valid: boolean;
  tier: 'free' | 'pro';
  components: string[];
  message?: string;
}

export interface LocalConfig {
  licenseKey?: string;
  installedComponents: InstalledComponent[];
}

export interface InstalledComponent {
  name: string;
  version: string;
  installedAt: string;
}

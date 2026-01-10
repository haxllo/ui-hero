#!/usr/bin/env node

import { Command } from 'commander';
import { addCommand } from './commands/add.js';
import { listCommand } from './commands/list.js';
import { updateCommand } from './commands/update.js';

const program = new Command();

program
  .name('ui-hero')
  .description('Install UI Hero landing sections for your Next.js project')
  .version('1.0.0');

program
  .command('add')
  .description('Add components to your project')
  .argument('[components...]', 'Component names to install')
  .action(async (components: string[]) => {
    try {
      await addCommand(components);
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List all available components')
  .action(async () => {
    try {
      await listCommand();
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

program
  .command('update')
  .description('Update installed components')
  .action(async () => {
    try {
      await updateCommand();
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

program.parse();

import { Command } from 'commander';
import pc from 'picocolors';
import { buildCommand } from './commands/build.js';
import { devCommand } from './commands/dev.js';
import { ejectCommand } from './commands/eject.js';

export async function cli() {
  const program = new Command();

  program
    .name('superdocs')
    .description('The open-source Mintlify alternative. Beautiful docs from Markdown.')
    .version('1.0.0');

  program
    .command('build')
    .description('Build the documentation site')
    .requiredOption('-i, --input <path>', 'Path to the docs folder')
    .option('-o, --output <path>', 'Output directory for the built site', './dist')
    .option('-t, --theme <name>', 'Theme to use', 'default')
    .option('-b, --base-url <url>', 'Base URL for the site', '/')
    .option('--search', 'Enable search functionality', false)
    .action(buildCommand);

  program
    .command('dev')
    .description('Start development server with watch mode')
    .requiredOption('-i, --input <path>', 'Path to the docs folder')
    .option('-t, --theme <name>', 'Theme to use', 'default')
    .option('-b, --base-url <url>', 'Base URL for the site', '/')
    .option('--search', 'Enable search functionality', false)
    .option('-p, --port <number>', 'Port for dev server', '4321')
    .action(devCommand);

  program
    .command('eject')
    .description('Export the full Astro project source code')
    .requiredOption('-i, --input <path>', 'Path to the docs folder')
    .option('-o, --output <path>', 'Output directory for the project', './astro-docs-project')
    .option('-t, --theme <name>', 'Theme to use', 'default')
    .option('-b, --base-url <url>', 'Base URL for the site', '/')
    .option('--search', 'Enable search functionality', false)
    .action(ejectCommand);

  try {
    await program.parseAsync(process.argv);
  } catch (error) {
    console.error(pc.red('Error:'), error.message);
    process.exit(1);
  }
}

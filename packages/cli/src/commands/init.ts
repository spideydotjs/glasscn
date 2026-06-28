import { Command } from 'commander';

export const initCommand = new Command()
  .name('init')
  .description('Initialize glassify in your project')
  .action(() => {
    console.log('not implemented yet');
  });

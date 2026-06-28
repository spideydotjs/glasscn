import { Command } from 'commander';
export const addCommand = new Command()
    .name('add')
    .description('Add a component to your project')
    .argument('<component>', 'component name to add')
    .action((component) => {
    console.log('not implemented yet');
});

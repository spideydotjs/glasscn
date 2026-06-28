#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { addCommand } from './commands/add.js';
const program = new Command();
program
    .name('glassify')
    .description('Glassify CLI - Build glassmorphic UI components')
    .version('0.1.0');
program.addCommand(initCommand);
program.addCommand(addCommand);
program.parse(process.argv);

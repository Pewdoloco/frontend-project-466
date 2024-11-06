#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .version('12.1.0')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);

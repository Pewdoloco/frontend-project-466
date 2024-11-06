#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
const program = new Command();

function parseFile(filepath) {
    const fullPath = path.resolve(process.cwd(), filepath);
    const data = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(data);
  }

program
  .version('12.1.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>') 
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);

    console.log('Parsed data from file1:', data1);
    console.log('Parsed data from file2:', data2);
  })
  .parse(process.argv);

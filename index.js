#!/usr/bin/env node
 
import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import { simpleGit } from "simple-git";
import ora from "ora";
import inquirer from "inquirer";
import { execSync } from "child_process";
 
const program = new Command();
 
program
  .name("wCLI")
  .description("Cria um projeto novo com o framework da debliw para desenvolvimento de spa")
  .version("0.0.1");
  
  program.command('criar')
  .description('Cria alguma coisa')
  .argument('<string>', 'string to split')
  .option('--c', 'display just the first substring')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });
 
program.parse(process.argv);
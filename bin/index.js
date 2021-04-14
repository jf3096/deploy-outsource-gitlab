#!/usr/bin/env node
"use strict";

const program = require("commander");
const packageJson = require('../package.json');

/**
 * 当前项目版本, e.g. 0.0.1
 * @type {string}
 */
const currentPackageVersion = packageJson.version;

program
    .version(currentPackageVersion)
    .usage('<command>');

program
    .command('create')
    .description('初始化发布项目（管理者使用）')
    .action(() => {
    });

program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

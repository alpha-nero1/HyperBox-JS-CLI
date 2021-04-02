#!/usr/bin/env node

const args = process.argv;
const createApp = require('./create-box-app');

if (args.length < 2) throw new Error('Must specify name of box app');
const commandName = args[2];
const subArgs = args.slice(3);

switch (commandName) {
  case 'create':
    if (!subArgs.length) {
      console.log('You must specify a project name 🌱')
      return;
    }
    createApp(subArgs);
    break;
  default:
    console.log('need help?')
}
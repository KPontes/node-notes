console.log('Starting app');

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log(process.argv);
var argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ' + command);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command invalid');
}
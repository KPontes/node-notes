console.log('Starting app');

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log(process.argv);
var argv = yargs.argv;
var command = process.argv[2];
// console.log(argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log('Duplicate note');
  } else {
    console.log(note);
  }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command invalid');
}

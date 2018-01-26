console.log('Starting app');

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
};
var argv = yargs.command('add', 'Add a new note', {
  title: titleOptions,
  body: {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
  }
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
  title: titleOptions
})
.command('remove', 'Remove a note', {
  title: titleOptions
})
.help()
.argv;

var command = argv._[0];
// var command = process.argv[2];
// console.log(process.argv);
// console.log(argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log('Duplicate note');
  } else {
    notes.logNote(note);
  }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    debugger;
    if (note) {
      notes.logNote(note);
    } else {
      console.log('Note not found');
    }
} else if (command === 'remove') {
    var removedNote = notes.removeNote(argv.title);
    var message = removedNote ? 'Note removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command invalid');
}

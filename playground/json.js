// var obj = {
//   name: 'Krishnan'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj, stringObj);

// var personString = '{"name": "Krishnan", "age": 40}'
// var person = JSON.parse(personString);
// console.log(typeof person, person);

const fs = require('fs');
var originalNote = {
  title: 'some title',
  body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note, note.title);

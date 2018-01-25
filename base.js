console.log('Starting notes.js');
// console.log(module);
module.exports.age = 25;
module.exports.addNote = function() {
  console.log('Add Note');
  return 'New Note';
};
module.exports.add = function(a,b) {
  return a + b;
};

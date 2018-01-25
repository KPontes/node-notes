console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./base.js');

var user = os.userInfo();
console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});

// using function returns
var res = notes.addNote();
console.log(res);
console.log('Result: ' + notes.add(10,-2));
// using lodash
console.log(_.isString(123));
console.log(_.isString('Krishnan'));

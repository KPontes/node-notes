var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Krishnan',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  //the alternate syntax bellow works with the this keyword and parses correctly the argumens
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};
user.sayHi(1, 2, 3); //problem with "this" and with args parsing
user.sayHi(1, 2, 3);

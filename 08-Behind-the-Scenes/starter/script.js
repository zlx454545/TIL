'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You ar ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       var add = function (a, b) {
//         return a + b;
//       };
//     }
//     // console.log(str);
//     console.log(millenial);
//     //add(2, 3);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// //Variables
// console.log(me);
// //console.log(job);
// //console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //Functions

// console.log(addDecl(2, 5));
// // console.log(addExpr(3, 5));
// // console.log(addArrow(3, 5));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

//console.log(this);

// const caclAge = function (birthYear) {
//   console.log(this);
// };

// //caclAge(1991);

// const caclAgeAroow = birthYear => {
//   console.log(this);
// };
// //caclAgeAroow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = matilda.calcAge;
// f();

// function test() {
//   var secondName = 'juli';
// }

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

//     //const self = this;
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend: ', friend);
// console.log('Me', me);

// //Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// //Reference types
// const jessica = {
//   firstName: 'Jesscia',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log(jessica);
// console.log(marriedJessica);

// // marriedJessica = {};

// //Copying objects
// const jessica2 = {
//   firstName: 'Jesscia',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// console.log(jessica2, jessicaCopy);
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log(jessica2, jessicaCopy);

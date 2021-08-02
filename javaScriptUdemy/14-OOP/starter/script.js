'use strict';

/* 
1. Use a constructor function to implement a Car. 
A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console;
3. 
Implement a 'brake' method that will decrease the car's speed by 5, 
and log the new speed to the console;
4. 
Create 2 car objects and experiment with calling 
'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// class expression
//const PersonCl = class {}

// class declarartion
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this.fullName = name;
//     //else alert(`${name} is not a full name!`);
//   }

//   static hey() {}
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1);
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(...account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven.__proto__);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);
// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1979);
// sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Use a constructor function to implement a Car. 
A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console;
3. 
Implement a 'brake' method that will decrease the car's speed by 5, 
and log the new speed to the console;
4. 
Create 2 car objects and experiment with calling 
'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   constructor(speed, make) {
//     this.speed = speed;
//     this.make = make;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }

//   accelrate() {
//     this.speed += 10;
//   }

//   break() {
//     this.speed -= 5;
//   }
// }

// const ford = new Car(50, 'ford');

// ford.speedUS;
// ford.accelrate();

// ford.speedUS = 50;

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Scienece');

// console.log(mike);
// mike.introduce();

/* 
1. Use a constructor function to implement an Electric Car 
(called EV) as a CHILD "class" of Car. Besides a make and current speed, 
the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the 
car's speed by 20, and decrease the charge by 1%. Then log a 
message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 
'accelerate', 'brake' and 'chargeBattery' (charge to 90%). 
Notice what happens when you 'accelerate'! 
HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (speed, make) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.accelrate = function () {
//   this.speed += 10;
//   console.log('zz');
// };

// const EV = function (battery, speed, make) {
//   Car.call(this, speed, make);
//   this.battery = battery;
// };

// EV.prototype = Object.create(Car);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.battery = chargeTo;
// };

// EV.prototype.accelrate = function () {
//   this.speed += 10;
//   this.battery -= 1;
//   console.log(this.speed, this.battery);
// };

// const Tesla = new EV(23, 120, 'Tesla');

// Tesla.accelrate();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer ');
// console.log(martha);

// class Account {
//   // Public fields
//   locale = navigator.language;

//   // Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     console.log('Thanks fucking');
//   }

//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   requestion(val) {
//     if (this.#approveLoan()) {
//       this.deposit(val);
//       console.log('Loan approved');
//     }
//   }

//   // Private methods
//   #approveLoan() {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestion(1000);
// acc1.approveLoan(1000);

// console.log(acc1);
// console.log(acc1.#pin);

// console.log(acc1.#movements);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, 
but this time using ES6 classes: create an 'EVCl' 
child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 
'chargeBattery' methods of this class, and also update the 
'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(this.make, this.speed, this.charge);
  }
}

'use strict';
/*
//209.Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this, because its gonna be bad for performance
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1. New {} is created
//2. function is called, this ={}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

//Normal Object
const person1 = {
  firstName: 'Chance',
  birthYear: '1991',
};

console.log(person1);

//210.Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

//214.ES6 Classes
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  
  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCL('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCL.prototype);

// PersonCL.prototype.greet = function () {
  //   console.log(`Hey ${this.firstName}`);
  // };
  
  jessica.greet();
  
  //1.Classes are NOT hoisted
  //2.Classes are first-class citizens
  //3.Classes are executed in strict mode
  
  const movements = [200, 530, 120, 300];

console.log(...movements.slice(-1));

const PersonObject = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonObject);
console.log(steven);

function maskify(cc) {
  console.log(`"${cc.slice(-4).padStart(cc.length, '#')}"`);
}

maskify('4556364607935616');

//219. Inheritance between "Classes": Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Linking prototype
Student.prototype = Object.create(Person.prototype);

//This need to be after the Object.create line otherwise it will overwrite this function
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// Student.__proto__ = Person;

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

//221. Inheritance between "Classes": ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  //Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  
  get age() {
    return 2037 - this.birthYear;
  }
  
  set fullName(name) {
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name!`);
  }
  
  get fullName() {
    return this._fullName;
  }
  
  //Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCL extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//222.Inheritance Between "Classes", Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);

//223. Another Class Example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //protected property
    this._movements = [];
    this.locale = navigator.language;
    
    console.log(`Thanks for opening an account, ${owner}`);
  }
  //Public interface
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  
  withdraw(val) {
    this.deposit(-val);
  }
  
  _approveLoan(val) {
    return true;
  }
  
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Chance', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
*/

//225.Encapsulation: Private class Fields and Methods
//1) Public fields
//2) Private fields
//3) Public methods
//4) Private methods
// (there is also the static version)
class Account {
  //1) Public fields (instances)
  locale = navigator.language;

  //2) Private fields(instances)
  #movements = [];
  #pin; //to privated it

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  //3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Chance', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
Account.helper();

//226.Chaining Method
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

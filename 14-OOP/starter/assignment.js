'use strict';
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//Organize prototype function by put them into a function
const addCarMethod = function () {
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`the ${this.make} is going ${this.speed}km/h`);
  };

  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`the ${this.make} is going ${this.speed}km/h`);
  };
};

addCarMethod();

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();

//Coding Challenge #3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`the ${this.make} is going ${this.speed}km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}km/h, with charge of ${this.charge}`
  );
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`the ${this.make} is going ${this.speed}km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}km/h, with charge of ${this.charge}`
  );
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);
*/

//228. Coding Challenge#4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
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

// const EV = function (make, speed, charge) {
//   CarCl.call(this, make, speed);
//   this.charge = charge;
// };

// //Link the prototypes
// EV.prototype = Object.create(CarCl.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(``);
// };

// const tesla = new EV('Tesla', 140, 90);
// console.log(tesla);

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  getcharge() {
    return this.#charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `this ${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const tesla = new EVCl('Tesla', 140, 90);

tesla.accelerate().brake();

'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //  ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const chance = {
  name: 'Chance Watson',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr' + 'Chance' + 'Watson';
};

checkIn(flight, chance);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(chance);

console.log(chance);

//132.Function accepting callback function
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

console.log(oneWord('W A T S O N'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transform string: ${fn(str)}`);
  console.log(`Transform by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//Function Returning Function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

//Transform greet function into arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hello')('Jonas');

//The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Chance Watson');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
//Does NOT work
//book(23, 'Sarah Williams');

//Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

//OR

book.call(swiss, ...flightData);

//135.Bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings); // its create a new function(bookEW) that bind the this keyword to eurowings object
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
bookLH(555, 'Chance Watson');
bookLX(666, 'Chance Watson');

//You can also preset the argument using bind method:
const bookEW23 = book.bind(eurowings, 23); //by preset the flightNumber as 23 you will only need to call this function with the last argument(name) ;
bookEW23('Chance Watson'); // right now all we need to pass in is the passenger name.

//With Event Listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // You need to use .bind(), other wise the this keyword will point to the eventHandler instead

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
//bin(this keyword, agument)
const addVAT = addTax.bind(null, 0.23); // the same as: addVAT = value => value + value * 0.23;

//function return function method
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23); // addVAT2 work the same as addVAT2
console.log(addVAT2(200));
console.log(addVAT2(23));

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

//Closer
const secureBooking = function () {
  let passengerCount = 0;
  
  return function () {};
};
*/
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

//Example 2

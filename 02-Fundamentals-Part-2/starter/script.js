'use strict';
/*
function logger() {
    console.log('My name is Chance')
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Funtion declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1993);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1993)

console.log(age1, age2);


//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUnitRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retire in ${retirement} years.`;
}
console.log(yearsUnitRetirement(1993, 'Chance'));
console.log(yearsUnitRetirement(1980, 'Bob'));



//Calling function inside a function
const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`
    return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUnitRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
}
console.log(yearsUnitRetirement(1993, 'Chance'));
console.log(yearsUnitRetirement(1980, 'Bob'));


const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins > avgKoalas * 2) {
        return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins * 2) {
        return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        return console.log('No team wins...')
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));


const friends = ['Micael', 'Steven', 'Peter']
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(year[1]);

console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = 'Jay'; //change data in the array
console.log(friends)
// friends = ['Bob', 'Alice'] //this you can not do because friend array declared by const.

const firstName = 'Chance';
const Chance = ['Chance', 'Watson', 2037 - 1993, 'Engineer', friends];
console.log(Chance);
console.log(Chance.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);

//Array
const friends = ['Micael', 'Steven', 'Peter']

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
//Add element to the first of array.
friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop(); //Last
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}

// Introduction to Object

//compare to an Array
const jonasArray = [
    'Chance',
    'Watson',
    2037 - 1993,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
//conpare to an Object
const Chance = {
    firstName: 'Chance',  //key-pair values / Properties = firstName/ Value = 'Chance'
    lastName: 'Watson',     //key-pair values / Properties = lastName/ Value = 'Watson'
    age: 2037 - 1993,       //key-pair values / Properties = age/ Value = '2037-1993'
    job: 'Engineer',        //key-pair values / Properties = job/ Value = 'Engineer'
    friends: ['Michael', 'Peter', 'Steven'] //key-pair values / Properties = friends/ Value = '['Michael', 'Peter', 'Steven']'
};

//differences:
//Object = -the order of these value doesn't matter at all.
//         - Used for unstructured DataTransfer.
//Array = order does matter a lot, because that is how we access the elements using there order number.
//         - Used for more ordered data.



const chance = {
    firstName: 'Chance',
    lastName: 'Watson',
    age: 2037 - 1993,
    job: 'Engineer',
    friends: ['Michael', 'Peter', 'Steven']
};

// console.log(chance);

// console.log(chance.lastName); // In dot notation we have to use real prop name, not computed prop name.
// console.log(chance['lastName']);

// const nameKey = 'Name';
// console.log(chance['first' + nameKey]);
// console.log(chance['first' + nameKey]);

const interestedIn = prompt('What do you want to know about Chance? Choose between firstName, lastName, age, job and friends');

if (chance[interestedIn]) { // chance[interestedIn] produces a true value in the if statement when the property specified by the user exists in the chance object.
    console.log(chance[interestedIn]); //the interestedIn will get replaced by value from funtion prompt.
} else { // undefined = false
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

//Add new prop to the object
chance.location = 'Thailand';
chance['twitter'] = '@chacnederick';
console.log(chance);

//Challenge
//"Chance has 3 friends, and his best friend is called Michael"

const Challenge = `${chance.firstName} has ${chance.friends.length} friends, and his best friend is called ${chance.friends[0]}.`
console.log(Challenge);

//Object method

const chance = {
    firstName: 'Chance',
    lastName: 'Watson',
    birthYear: 1993,
    job: 'Engineer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    // // calcAge: function (birthYear) { //calcAge is a prop
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
        //     return 2037 - this.birthYear // this = the whole chance object
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

// const calcAge = function (birthYear) { //calcAge is a Variable
//     return 2037 - birthYear;
// }

console.log(chance.calcAge()); //Dot object

// console.log(chance['calcAge'](1993)); // Brackets object

console.log(chance.age);

//Challenge

console.log(chance.getSummary());

//For Loop

// console.log('Lifting weights repetition 1 🏋🏻‍♂️🏋🏻‍♂️');
// console.log('Lifting weights repetition 2 🏋🏻‍♂️🏋🏻‍♂️');
// console.log('Lifting weights repetition 3 🏋🏻‍♂️🏋🏻‍♂️');
// console.log('Lifting weights repetition 4 🏋🏻‍♂️🏋🏻‍♂️');
// console.log('Lifting weights repetition 5 🏋🏻🏋🏻');
// console.log('Lifting weights repetition 6 🏋🏻‍♂️🏋🏻‍♂️');
// console.log('Lifting weights repetition 7 🏋🏻‍♂️🏋🏻‍♂️');
// console.log('Lifting weights repetition 8 🏋🏻‍♂️🏋🏻‍♂️');
// console.log('Lifting weights repetition 9 🏋🏻‍♂️🏋🏻‍♂️');
// console.log('Lifting weights repetition 10 🏋🏻‍♂️🏋🏻‍♂️');

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️🏋🏻‍♂️`);
}


//Looping Array, Breaking and Continuing
const jonas = [
    'Chance',
    'Watson',
    2037 - 1993,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) { // jonas[5] does not exist
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    
    //Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break


const chance = [
    'Chance',
    'Watson',
    2037 - 1993,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < chance.length; i++) {
    if (typeof chance[i] !== 'string') continue; //continue = skip

    console.log(chance[i], typeof chance[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < chance.length; i++) {
    if (typeof chance[i] === 'number') break;

    console.log(chance[i], typeof chance[i]);
}

const chance = [
    'Chance',
    'Watson',
    2037 - 1993,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const chanced = [];

for (let i = chance.length - 1; i >= 0; i--) {
    chanced.push(chance[i]);
}

console.log(chanced);

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep} 🏋🏻‍♂️`)
    }
}
*/


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️🏋🏻‍♂️`);
// }


let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏻‍♂️🏋🏻‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; //roll dice function
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; // roll the dice again
}
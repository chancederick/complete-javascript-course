'use strict';
/* //assignment 1
function describeCountry(country, population, capitalCity) {
    return `'${country} has ${population} million people and its capital city is ${capitalCity}.'`;
}
const myCountry = describeCountry('Thailand', 60, 'Bangkok');
console.log(myCountry)

//function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentThai = percentageOfWorld1(60);
const percentChina = percentageOfWorld1(1441);
const percentUS = percentageOfWorld1(333);

console.log(percentThai, percentChina, percentUS);

//function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentThai2 = percentageOfWorld2(60);
const percentChina2 = percentageOfWorld2(1441);
const percentUS2 = percentageOfWorld2(333);

console.log(percentThai2, percentChina2, percentUS2);

//Arrow function
const percentageOfWorld3 = population => (population / 7900) * 100;

const percentThai3 = percentageOfWorld3(60);
const percentChina3 = percentageOfWorld3(1441);
const percentUS3 = percentageOfWorld3(333);

console.log(percentThai3, percentChina3, percentUS3);

const percentageOfWorld3 = population => (population / 7900) * 100;


const describePopulation = function (country, population) {

    const percentagePop = percentageOfWorld3(population);
    return `'${country} has ${population} million people, which is about ${percentagePop} of the world'.`;
}

console.log(describePopulation('Thailand', 60));
console.log(describePopulation('Chaina', 1441));
console.log(describePopulation('US', 333));


//Introduction to Arrays
const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);


//Basic Array Operations(Methods)
const neighbours = ['Maxican', 'Brazil', 'Cannada'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')); {
    console.log('Probably not a central european country :D');
}

neighbours[neighbours.indexOf('Brazil')] = 'Guatemala';
console.log(neighbours);

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

//Introduction to Objects
const myCountry = {
    country: 'Thailand',
    capital: 'Bangkok',
    language: 'Thai',
    population: '60',
    neighbours: ['Indonesia', 'Lao', 'Myanmar']
};

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population = Number(myCountry.population) + 2;
console.log(myCountry.population);
myCountry['population'] = myCountry['population'] - 2;
console.log(myCountry.population);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry['population']);

const myCountry = {
    country: 'Thailand',
    capital: 'Bangkok',
    language: 'Thai',
    population: '60',
    neighbours: ['Indonesia', 'Lao', 'Myanmar'],
    describe: function () {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours[length]} countries and a capital called ${this.capital}.`
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);

//Coding Exercise #7;
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`);
}
//Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

//Looping Arrays, Breaking and Continuing
//function declaration

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
const percentage2 = [];

for (let i = 0; i < populations.length; i++) {
    percentage2.push(percentageOfWorld1(populations[i]))
};
console.log(percentage2);

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {

    for (let x = 0; x < listOfNeighbours[i].length; x++) {
        console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
    }
};

//The while Loop
const populations = [10, 1441, 332, 83];
const percentage2 = [];
const percentage3 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
    percentage2.push(percentageOfWorld1(populations[i]))
};
console.log(percentage2);


let i = 0;
while (i < populations.length) {
    percentage3.push(percentageOfWorld1(populations[i]));

    i++
}

console.log(percentage3);

//Code exercise 8:

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
};

for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
};

console.log(tips);
console.log(totals);
*/

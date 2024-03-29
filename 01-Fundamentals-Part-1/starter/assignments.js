// assignment Values and Variables
// let country = "Thailand";
// let continent = "Asia";
let population = '1';

// console.log(country);
// console.log(continent);
// console.log(population);

// // assignment Data types
// // let isIsland = 'false';
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // let, const and var
// language = 'Thai';
const country = "Thailand";
const continent = "Asia";
const isIsland = 'false';


//Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// population--;
// console.log(population > 6);
// console.log(population < 33);

// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

// console.log(description);

// //String and Template Literals
// const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`
/*
// console.log(descriptionNew)
const popAbove = population - 33;
const popBelow = 33 - population;

if (population > 33) {
    console.log(`"${country}'s population is ${popAbove} above average"`)
} else {
    console.log(`"${country}'s population is ${popBelow} below average"`)
}

//Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> 
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


const numNeighbours = prompt('How many neighbour countries does your contry have?');

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders')
}


const language = 'English';

switch (language) {
    case 'chinese': //day === 'monday
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');

}
*/
const bill = 600;
// let tip;
// 50 < bill < 300 ? tip = (bill * 15) / 100 : tip = (bill * 20) / 100;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);




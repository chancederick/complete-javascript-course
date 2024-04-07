// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };

  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/
// 1) Understanding the problem
//   - Array transformed to string, seperated by ...
//   - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C
// - String needs to contain day (index + 1)
// - Add ... between elements and start end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]}C in ${i + 1} days`;
  }
  return str;
}

console.log(printForecast(data1));

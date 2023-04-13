// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map((x) => {
//   return x * 2;
// });

// console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.

// const newFilteredNumbers = numbers.filter((num) => {
//   return num > 10;
// });

// console.log(newFilteredNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.

// const newReducedNumbers = numbers.reduce((accumulator, currentNum) => {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNum = " + currentNum);
//   return accumulator + currentNum;
// });

// console.log(newReducedNumbers);

// //Find - find the first item that matches from an array.

// const newFoundNumber = numbers.find((num) => {
//   return num > 10;
// });

// console.log(newFoundNumber);

// //FindIndex - find the index of the first item that matches.

// const newIndexNumber = numbers.findIndex((num) => {
//   return num > 10;
// });

// console.log(newIndexNumber);

import emojipedia from "./emojipedia";

const abbreviatedMeanings = emojipedia.map((index) => {
  return index.meaning.substring(0, 100);
});

console.log(emojipedia[0].meaning, abbreviatedMeanings);

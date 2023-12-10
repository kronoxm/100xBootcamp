/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length == 0) return undefined;
  // let largest = -1000000;
  // numbers.forEach((el) => (el > largest ? (largest = el) : el));
  // return largest;
  return Math.max(...numbers);
}

// console.log(findLargestElement([-5, -10, -2, -8]));
module.exports = findLargestElement;

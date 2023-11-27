const fs = require("fs");

// Question-1:  Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.

const namesArr = function (arr1, arr2, callback) {
  return callback(arr1, arr2);
};

const fullNameArr = function (arrFirst, arrLast) {
  const fullNameArr = [];
  arrFirst.forEach((valFirst) =>
    arrLast.forEach((valLast) => {
      fullNameArr.push(valFirst + valLast);
    })
  );
  return fullNameArr;
};

console.log(
  namesArr(
    ["Henry", "Josh", "Max"],
    ["Smith", "Hendricks", "Fosh"],
    fullNameArr
  )
);

// Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.

function oddArrays(arr) {
  const oddArr = [];
  arr.forEach((val) => {
    val % 2 != 0 ? oddArr.push(val) : val;
  });
  return oddArr;
}
console.log(oddArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.

function doubleArrays(arr) {
  const doubleArr = [];
  arr.forEach((val) => {
    doubleArr.push(val * 2);
  });
  return doubleArr;
}

console.log(doubleArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Question-4:  Write a function that takes an array of strings and returns a new array where each string is transformed to uppercase.

function arrToUpper(arr) {
  const upperArr = [];
  arr.forEach((val) => {
    upperArr.push(val.toUpperCase());
  });
  return upperArr;
}

console.log(arrToUpper(["hello", "world", "whatever"]));

// Question-5:  Write a function that uses setTimeout to simulate an asynchronous operation. The function should print a message to the console after a specified delay.

function delayedResponse(val, delay) {
  setTimeout(() => {
    console.log(val);
  }, delay);
}

delayedResponse("Hello World", 1000);

// Question-6:  WAP to perform read and write operation in a text file in JS.

fs.writeFile("input.txt", "Hello World!", (error) => {
  error ? console.log(error) : console.log("Write successful");
});
fs.readFile("input.txt", "utf-8", (error, data) => {
  error ? console.log(error) : console.log(data);
});

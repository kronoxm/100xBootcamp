const prompt = require("prompt-sync")({ sigint: true });

// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

const arithmeticOps = (num1, num2) => {
  const addn = num1 + num2;
  const subtn = num1 - num2;
  const multp = num1 * num2;
  const divi = num1 / num2;

  console.log(addn, subtn, multp, divi);
  return 0;
};

arithmeticOps(2, 5);

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let variable = 1234;
console.log((variable += 12));
console.log((variable -= 12));
console.log((variable *= 10));
console.log((variable /= 20));
console.log((variable **= 2));

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

const a1 = Number(prompt("Enter num1: "));
const b1 = Number(prompt("Enter num2: "));
a1 === b1
  ? console.log("Numbers are equal")
  : a1 > b1
  ? console.log(`${a1} greater than ${b1}`)
  : console.log(`${a1} less than ${b1}`);

// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

10 > 15 && 12 === 12 ? console.log(true) : console.log(false);
10 > 9 || 12 === 12 ? console.log(true) : console.log(false);
!(10 % 3 == 0) ? console.log(true) : console.log(false);

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

const a = 7;
const b = 10;
console.log(a & b);
console.log(a | b);
console.log(~b);
console.log(a ^ b);

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

const val1 = 30;
const val2 = 20;

val1 > val2
  ? console.log(`${val1} is greater`)
  : console.log(`${val2} is greater`);

// Problem 7: Write a JavaScript program to use string operators to concatenate two strings.

let str = "Hello";
let str1 = "World";
console.log(str + str1);
console.log((str += str1));

// Problem 8: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

console.log(typeof 1);
console.log(typeof 2.33);
console.log(typeof "Hello");
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof function () {});
console.log(typeof []);
console.log(typeof true);
console.log(typeof {});
console.log(typeof undefined);

// Problem 9: Write a JavaScript program to use the in operator to check if a property exists in an object.

const realEstate = {
  area: "California",
  property: 3214,
  price: 34_000_000,
  conversion: 0.18,
};
realEstate.property ? console.log(true) : console.log(false);
"property" in realEstate ? console.log(true) : console.log(false);

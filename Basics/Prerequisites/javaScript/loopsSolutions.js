const prompt = require("prompt-sync")({ sigint: true });

// Question-1: WAP that logs numbers from 1 to 10 to the console.

for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Question-2: WAP that log all even numbers from 2 to 20.

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) console.log(i);
}

// Question-3: WAP that counts backward from 10 to 1 and logs the values.

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Question-4: WAP to calculate the sum of numbers from 1 to 5.

let sum = 0;
for (let i = 0; i < 6; i++) {
  sum += i;
}
console.log(sum);

// Question-5: WAP that prints powers of 2 (2^n) up to 64.

let res1 = 1;
while (res1 <= 64) {
  res1 *= 2;
  console.log(res1);
}

// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

let userGuess = 0;
const correctNum = 7;
do {
  userGuess = Number(prompt("Guess the correct number: "));
} while (userGuess != correctNum);

// Question-7: WAP to display the multiplication table (1 to 10) in the console.

let n2 = 1;

while (n2 <= 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n2} x ${i} = ${n2 * i}`);
  }
  console.log("---------------");
  n2++;
}

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).

let n1 = 0;
while (n1 < 5) {
  n1 !== 3 ? console.log(n1) : n1;
  n1 += 1;
}

const num = 10;
for (let i = 0; i < num; i++) {
  if (i === 5) {
    break;
  }
  i !== 3 ? console.log(i) : i;
}

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."

let n = 1;

while (n <= 30) {
  n % 5 == 0 && n % 3 == 0
    ? console.log("FizzBuzz")
    : n % 5 == 0
    ? console.log("Buzz")
    : n % 3 == 0
    ? console.log("Fizz")
    : console.log(n);
  n++;
}

// Question-10: WAP to identify and log prime numbers within a given range.

let range = 50;
let res = [];

const checkPrime = function (num) {
  let isPrime = true;
  if (num === 1 || num === 0) {
    return 0;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        return false;
      }
    }
    return true;
  }
};

for (let i = 1; i <= range; i++) {
  checkPrime(i) ? res.push(i) : i;
}

console.log(res.join(" "));

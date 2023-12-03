// const overWrite = require("ansi-escapes");
import ansiEscapes from "ansi-escapes";
console.log("Hello World!");

const a = "New Hello World!";
console.log(a);

// WAP to greet a person given their first and last name

function greetPerson(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, good day to you!`;
}
console.log(greetPerson("John", "Smith"));

// WAP greet a person based on gender

function greetPersonGender(name, gender) {
  if (gender == undefined) return `Hello ${name}, how are you?`;
  return gender.toLowerCase() == ("female" || "f")
    ? `Hello Miss ${name}, you look beautiful today!`
    : gender.toLowerCase() == ("male" || "m")
    ? `Hello Mister ${name}, you look handsome today!`
    : `Hello ${name}, your gender is ${gender}`;
}
console.log(greetPersonGender("Harry", "male"));

// WAP to print sum numbers from 1 to 1000

let count = 0;
while (count != 1000) {
  count++;
  console.log(count);
}

// WAP prints all even numbers in a array

const arr = [1, 2, 3, 54, 6, 7, 8, 6, 4, 3, 6, 887, 545, 324, 222, 6754];
arr.forEach((el) => (el % 2 == 0 ? console.log(el) : el));

// WAP biggest num in array

let max = 0;
arr.forEach((el) => {
  max = el;
  el > max ? (max = el) : max;
});
console.log(max);
// or
console.log(Math.max(...arr));

// WAP that prints all male people's first name given a complex object

const persons = [
  {
    firstName: "John",
    lastName: "Smith",
    gender: "male",
  },
  {
    firstName: "Tiara",
    lastName: "Jacks",
    gender: "female",
  },
  {
    firstName: "Simon",
    lastName: "Mintor",
    gender: "male",
  },
];

function malePersonFirst(obj) {
  return obj.forEach((person) =>
    person.gender == "male" ? console.log(person.firstName) : person
  );
}
malePersonFirst(persons);

// WAP that reverses all elements of a array

const newArr = arr.reverse();
console.log(newArr);

// WA function that finds the sum of two numbers

function summation(a, b) {
  return a + b;
}
console.log(summation(22, 10));

// WA function that displays above result in a pretty format

function sumPrettifier(sum) {
  return `The sum is ${sum}`;
}
console.log(sumPrettifier(summation(22, 10)));

// WA function that takes this sum and prints it in passive tense

function passiveSum(sum) {
  return `${sum} is the sum`;
}
console.log(passiveSum(summation(22, 10)));

// CALLBACK

function arithematicFunc(a, b, callbackFunc) {
  return callbackFunc(a, b);
}
function sub(a, b) {
  return a - b;
}
function sum(a, b) {
  return a + b;
}
console.log(arithematicFunc(2, 10, sum));

// -------------- Assignments --------------

// Create a counter counts from 30 to 0

let counter = 30;

function countInterval() {
  console.log(counter);
  if (counter === 0) {
    clearInterval(counterInterval);
  } else {
    counter--;
  }
  return;
}
const counterInterval = setInterval(countInterval, 1000);

// Calculate the time it takes between a setTimeout call and the inner function actually running

// Create a terminal clock (HH:MM:SS)

function currentTime(addZero) {
  const date = new Date();
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(
    date.getSeconds()
  )}`;
}

function leftZero(num) {
  return num < 10 ? "0" + String(num) : String(num);
}

const runCurTime = setInterval(() => {
  process.stdout.write(ansiEscapes.eraseLines(1) + currentTime(leftZero));
}, 1000);

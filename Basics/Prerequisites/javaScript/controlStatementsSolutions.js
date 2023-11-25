const prompt = require("prompt-sync")({ sigint: true });

// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const x = Number(prompt("Enter number: "));
if (x > 10) {
  console.log(`The entered number ${x} is greater than 10`);
} else if (x == 10) {
  console.log(`The entered number ${x} is equal to 10`);
} else {
  console.log(`The entered number ${x} is not greater than 10`);
}

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

const age = Number(prompt("Enter age: "));
if (age > 17) {
  console.log("You are legible to drive a car");
} else {
  console.log("You can't drive a car yet");
}

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

const score = Number(prompt("Enter score: "));
const checkGrade = {
  A: score > 90,
  B: score > 70 && score < 90,
  C: score > 50 && score < 70,
  D: score > 40 && score < 50,
};

if (checkGrade.A) {
  console.log("Your grade is A");
} else if (checkGrade.B) {
  console.log("Your grade is B");
} else if (checkGrade.C) {
  console.log("Your grade is C");
} else if (checkGrade.D) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
}

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

const curHour = new Date().getHours();
curHour >= 12 ? console.log("Good Evening") : console.log("Good Morning");

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

const num1 = Number(prompt("Enter number: "));
switch (num1) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Please enter valid number");
}

// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

const num2 = Number(prompt("Enter number: "));
switch (num2) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Please enter valid number");
}

// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

const fruitVariable = prompt("Enter fruit name: ");

switch (fruitVariable.toUpperCase()) {
  case "APPLES":
    console.log("Apples are rich in nutrients");
    break;
  case "GRAPES":
    console.log("Apples are very expensive right now");
    break;
  case "PEACHES":
    console.log("Peaches are extremely delightful");
    break;
  default:
    console.log(`Sorry, there are none of ${fruitVariable}`);
}

// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

const temperature = Number(prompt("Enter temperature: "));
temperature > 80
  ? console.log(`${temperature}°C is high`)
  : temperature > 35 && temperature < 80
  ? console.log(`${temperature}°C is medium`)
  : temperature < 35
  ? console.log(`${temperature}°C is low`)
  : console.log("Please enter valid temperature");

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.

const num = Number(prompt("Enter number: "));
num >= 0
  ? console.log(`${num} is positive`)
  : console.log(`${num} is negative`);

num % 2 == 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);

// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

const username = prompt("Enter username: ");

if (username.length < 6) {
  console.log("Username is too short");
} else if (username.length > 15) {
  console.log("Username is too long");
} else {
  console.log("Username accepted");
}

const prompt = require("prompt-sync")({ sigint: true });

// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

const distanceInKms = prompt("Enter distance in Kms: ");
const convertDistance = `${distanceInKms}kms in meters = ${
  distanceInKms * 100
}m\n${distanceInKms}kms in centimeters = ${distanceInKms * 1000}cm`;

console.log(convertDistance);

// Question-2:    WAP to input radius of a circle and log the area of circle.

const radius = prompt("Enter Radius: ");
const areaOfCircle = (Math.PI * (radius ^ 2)).toFixed(2);

console.log(areaOfCircle);

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

const num1 = Number(prompt("enter number: "));
const num2 = Number(prompt("enter another number: "));
const arithmeticOps = `Addition: ${num1 + num2}\nSubtration: ${
  num1 - num2
}\nMultiplication: ${num1 * num2}\nDivision: ${num1 / num2}`;

console.log(arithmeticOps);

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

const subjectMarks1 = Number(prompt("enter score of subject 1: "));
const subjectMarks2 = Number(prompt("enter score of subject 2: "));
const totalMarks = subjectMarks1 + subjectMarks2;
const totalpercentage = totalMarks / 100 / 2;

console.log(
  `Total marks: ${totalMarks}\nTotal percentage: ${totalpercentage * 100}%`
);

// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const length = Number(prompt("Enter length: "));
const breath = Number(prompt("Enter breath: "));
const rectArea = length * breath;
const parimeter = 2 * (length + breath);

console.log(`Area: ${rectArea}, Parimeter: ${parimeter}`);

// Question-6:    WAP to input n numbers and log the average of those number.

const nNum = Number(prompt("How many numbers: "));
let sum = 0;
for (let i = 0; i < nNum; i++) {
  const num = Number(prompt("Enter number: "));
  sum += num;
}
const average = sum / nNum;

console.log(average);

// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

const citiesDistance = Number(prompt("Enter distance in km: "));
const distanceInMtrs = citiesDistance * 1000;
const distanceInFt = citiesDistance * 3280.84;
const distanceInInches = citiesDistance * 39370;
const distanceInCms = citiesDistance * 100000;

console.log(
  `Distance between cities: ${citiesDistance}kms\n-----\nDistance in meters: ${distanceInMtrs}mtrs\nDistance in feet: ${distanceInFt}ft\nDistance in inches: ${distanceInInches}in\nDistance in centimeters: ${distanceInCms}cms`
);

// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const tempInFahrenheit = Number(prompt("Enter temperature in Fahrenheit: "));
const convertToCentigrade = (tempInFahrenheit - 32) * (5 / 9);

console.log(
  `Temperature in Fahrenheit: ${tempInFahrenheit}°F\nTemperature in Centigrade: ${convertToCentigrade}°C`
);

// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const productQty = Number(prompt("Enter quantity: "));
const productRate = Number(prompt("Enter rate: "));
const rateBeforeDiscount = productQty * productRate;
const discountRate = rateBeforeDiscount * 0.1;
const rateAfterDiscount = rateBeforeDiscount - discountRate;

console.log(
  `Rate before discount: ${rateBeforeDiscount}\nDiscount rate: ${discountRate}\nRate after discount: ${rateAfterDiscount}`
);

// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const principalAmt = Number(prompt("Enter amount: "));
const roi = Number(prompt("Enter interest rate: "));
const numYears = Number(prompt("Enter number of years: "));
const simpleInterest = (principalAmt * numYears * roi) / 100;
const totalAmt = principalAmt + simpleInterest;

console.log(totalAmt, simpleInterest);

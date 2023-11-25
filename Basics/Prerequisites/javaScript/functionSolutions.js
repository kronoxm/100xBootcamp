const prompt = require("prompt-sync")({ sigint: true });

// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
  // return `Hello, ${name}`;
};
greeting("Harkirat");

// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

const addition = function (a, b) {
  console.log(a + b);
  // return a + b;
};
addition(9, 10);

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

const greetWithTime = (curHour) =>
  curHour > 11 && curHour < 17
    ? console.log("Afternoon")
    : curHour > 17
    ? console.log("Evening")
    : console.log("Morning");

greetWithTime(11);

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

const areaRectangle = (l, b) => console.log(l * b);
areaRectangle(10, 20);

// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

const powerOf = function (base, exp) {
  console.log(base ** exp);
  // return base ** exp;
};

powerOf(2, 12);

// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

const checkPrimeNum = function (num) {
  let isPrime = true;
  if (num === 1) {
    console.log("Not valid");
    return 0;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  isPrime ? console.log(true) : console.log(false);
};

checkPrimeNum(3);

// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

const variable1 = "Hello";

function withLocalVar() {
  const variable2 = "World";
  console.log(variable2);
}

function withGlobalVar() {
  console.log(variable1);
  // console.log(variable2); // undefined as it's only defined in function withLocalVariable which is local to that
}

console.log(variable1);
withGlobalVar();
withLocalVar();

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

const outerFunction = function () {
  const variable = "Slim";
  const innerFunction = function () {
    const variable1 = "Shady";
    console.log(variable + variable1);
    return 0;
  };
  return innerFunction();
};

const innerFunction = outerFunction();
console.log(innerFunction);

// Question-9:  Write a recursive function to calculate the factorial of a given number.

function factorial(n) {
  let res = 1;
  if (n > 1) {
    do {
      res *= n;
      n--;
    } while (n > 1);
    // factorial(n - 1);
  }
  console.log(res);
}
factorial(5);

function factorialRecursive(n) {
  if (n === 0) return 1;
  return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5));

// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).

function x(n) {
  return n + 2;
}
function g(n) {
  return 2 * n;
}
function h(n) {
  return x(g(n));
}
console.log(h(22));

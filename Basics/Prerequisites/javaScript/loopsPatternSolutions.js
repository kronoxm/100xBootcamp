const prompt = require("prompt-sync")({ sigint: true });
const n = 5;

// Question-1:

// WAP to print this

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}

// Question-2:

// WAP to print this

//    *
//   ***
//  *****
// *******

const num = 7;
for (let i = 1; i <= 4; i++) {
  let str = "";
  for (let j = 1; j <= num; j++) {
    j >= 5 - i && j <= 3 + i ? (str += "*") : (str += " ");
  }
  console.log(str);
}

// Question-3:

// WAP to print this

// *****
// *   *
// *   *
// *****

for (let i = 1; i <= 4; i++) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    if (i == 1 || i == 4 || j == 1 || j == 5) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}

// Question-4:

// WAP to print this

// 1
// 12
// 123
// 1234
// 12345

let temp = "1";
for (let i = 1; i <= n; i++) {
  console.log(temp);
  temp += i + 1;
}

// Question-5

// WAP to print this

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE

const numb = 9;
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= numb; j++) {
    j >= 6 - i && j <= 4 + i
      ? (str += String.fromCharCode(64 + i))
      : (str += " ");
  }
  console.log(str);
}

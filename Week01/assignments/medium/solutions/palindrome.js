/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const originalStr = str.toLowerCase().replace(/[!@#$%?\.,^&\s+*]/g, "");
  const reversedStr = [...str.toLowerCase()]
    .reverse()
    .join("")
    .replace(/[!@#$%?\.,^&\s+*]/g, "");
  return originalStr == reversedStr;
}

console.log(isPalindrome("Nan"));
module.exports = isPalindrome;

const _ = require("lodash");

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function checkParenthesis(str) {
  if (str.length % 2 !== 0) {
    return 0;
  }
  const parenthesis = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  let arr = [...str].filter((a, i) => i % 2 === 0);
  let arrToCheck = [...str].filter((a, i) => i % 2 === 1);
  // console.log(arr, arrToCheck);
  return arr.every(
    (element, index) => parenthesis[element] === arrToCheck[index]
  );
}

console.log(checkParenthesis("()"));
console.log(checkParenthesis("()[]{}"));
console.log(checkParenthesis("(]"));

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let reversedStr = [];
  if (str === "") return true;
  for (let i = str.length; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr.join("") === str ? true : false;
}

console.log(palindrome("A man, a plan, a canal: Panama"));
console.log(palindrome("race a car"));
console.log(palindrome(" "));

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

function reversedStr(arr) {}

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function validAnagram(str1, str2) {
  const countOfStr1 = countOccurances(str1);
  const countOfStr2 = countOccurances(str2);

  return _.isEqual(countOfStr1, countOfStr2);
}
function countOccurances(str) {
  const counts = {};
  for (const num of [...str]) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

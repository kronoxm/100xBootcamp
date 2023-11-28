const _ = require("lodash");

// Question-1
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

// Question-2
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

// Question-3
// Write a function that reverses a string. The input string is given as an array of characters s.

function reversedStr(arr) {
  return arr.reverse();
}

console.log(reversedStr(["h", "e", "l", "l", "o"]));
console.log(reversedStr(["H", "a", "n", "n", "a", "h"]));

// Question-4
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

// Question-5
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

function uniqueChars(str) {
  const counts = {};
  const arr = [];
  for (const num of [...str]) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  let arrEntries = Object.entries(counts);
  for ([key, val] of arrEntries) {
    if (val === 1) {
      arr.push(key);
    }
  }
  return arr.length != 0 ? str.indexOf(arr[0]) : -1;
}

console.log(uniqueChars("leetcode"));
console.log(uniqueChars("loveleetcode"));
console.log(uniqueChars("aabb"));

// Question-6
// Given a roman numeral, convert it to an integer.

const romanIntObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(romanNum) {
  let currentValue = 0;
  let result = 0;
  let firstNum = romanIntObj[[...romanNum][0].toUpperCase()];
  for (let char of [...romanNum]) {
    currentValue = romanIntObj[char.toUpperCase()];
    if (currentValue <= firstNum) {
      result += currentValue;
    } else {
      result = currentValue - result;
    }
  }
  return result;
}

console.log(romanToInt("XM"));

// Question-7
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

function excelColToNumber(letters) {
  return letters.split("").reduce((r, a) => r * 26 + parseInt(a, 36) - 9, 0);
}

console.log(excelColToNumber("A"));
console.log(excelColToNumber("AB"));
console.log(excelColToNumber("ZYA"));

// Question-8
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function firstOccurances(haystack, needle) {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
}

console.log(firstOccurances((haystack = "sadbutsad"), (needle = "sad")));
console.log(firstOccurances((haystack = "leetcode"), (needle = "leeto")));

// Question-9
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function commonPrefix(arr) {
  if (!arr[0] || arr.length == 1) return arr[0] || "";
  let i = 0;
  while (arr[0][i] && arr.every((w) => w[i] === arr[0][i])) i++;
  return arr[0].substr(0, i);
}

console.log(commonPrefix(["hello", "hero"]));

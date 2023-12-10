/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// import _ from "lodash";
const _ = require("lodash");
function isAnagram(str1, str2) {
  const countOfStr1 = countOccurances(str1);
  const countOfStr2 = countOccurances(str2);
  return _.isEqual(countOfStr1, countOfStr2);
}
function countOccurances(str) {
  const strArr = [...str.toLowerCase()];
  const count = {};
  for (const num of strArr) {
    count[num] = count[num] ? count[num] + 1 : 1;
  }
  return count;
}

// console.log(isAnagram("spar", "rAsp"));
module.exports = isAnagram;

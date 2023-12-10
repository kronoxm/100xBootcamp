/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;

  let vowels = "aeiouAEIOU";
  [...str].forEach((letter) => (vowels.includes(letter) ? (count += 1) : 1));

  // let vowelReg = /^[aeiou]$/i;
  // [...str].forEach((el) => (vowelReg.test(el) ? (count += 1) : count));
  return count;
}

console.log(countVowels("OpenAI"));
module.exports = countVowels;

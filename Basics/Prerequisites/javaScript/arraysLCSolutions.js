const { values } = require("lodash");

// Question-1
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNum(nums) {
  const counts = {};
  const arr = [];
  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  let arrEntries = Object.entries(counts);
  for ([key, val] of arrEntries) {
    val === 1 ? arr.push(key) : 0;
  }
  return arr.length != 0 ? arr[0] : 0;
}

console.log(singleNum([1, 1]));

// Question-2
// Given an integer array nums sorted in non-decreasing order, remove the duplicates such that each unique element appears only once.
// The relative order of the elements should be kept the same.Then return the number of unique elements in nums.

function uniqueArr(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(uniqueArr([3, 14, 5, 1, 3, 1]));

// Question-3
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function checkDuplicate(arr) {
  const counts = {};
  for (const el of arr) {
    counts[el] = counts[el] ? counts[el] + 1 : 1;
  }
  return Object.values(counts).every((el) => el < 2);
}

console.log(checkDuplicate([1, 2, 3, 1]));
console.log(checkDuplicate([1, 2, 3, 4]));
console.log(checkDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// Question-4
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

function plusOne(arr) {
  return [...(Number(arr.join("")) + 1).toString().split("").map(Number)];
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));

// Question-5
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.nums2 has a length of n.

function mergeArr(arr1, m, arr2, n) {
  return arr1.slice(0, m).concat(arr2.slice(0, n)).sort();
}

console.log(mergeArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeArr([1], 1, [], 0));
console.log(mergeArr([0], 0, [1], 1));

// Question-6
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZero(arr) {
  const counts = {};
  if (!arr.includes(0)) return -1;
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  arr = arr.filter((item) => item !== 0);
  for (let i = 0; i < counts["0"]; i++) {
    arr.push(0);
  }
  return arr;
}

console.log(moveZero([0, 1, 0, 3, 12]));
console.log(moveZero([0]));

// Question-7
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const getTargetVal = (arr, tar) => {
  let mapNum = {};
  let indexes = [];

  for (let i = 0; i < arr.length; i++) {
    mapNum[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let target = tar - arr[i];
    if (mapNum[target] !== null && mapNum[target] !== i) {
      indexes.push(i);
      indexes.push(mapNum[target]);
    }
  }
  return indexes;
};

console.log(getTargetVal([2, 7, 11, 15], 9));
console.log(getTargetVal([3, 2, 4], 6));
console.log(getTargetVal([3, 3], 6));

// Question-8
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(arr) {
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return getKeyByValue(counts, Math.max(...Object.values(counts)));
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

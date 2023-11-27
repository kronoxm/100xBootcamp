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

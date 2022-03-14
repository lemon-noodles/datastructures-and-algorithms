/*
    217. Contains Duplicate

    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

var containsDuplicate = function (nums) {
  let hash = {};
  for (const idx in nums) {
    if (hash[nums[idx]]) {
      return true;
    }
    hash[nums[idx]] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3]));

/*
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

    Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

    The tests are generated such that there is exactly one solution. You may not use the same element twice.

    Your solution must use only constant extra space.
*/

var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [++left, ++right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));

/*

    Brute Force technique would be to use 2 arrays to loop over the array
    Time complexity is O(n*n)
    Space complexity is O(1)


    Best approach for this problem is to use 2 pointers
    Time complexity is O(n)
    Space complexity is O(1)

    to solve a 2 sum problem with O(1) space complexity we have to sort it first
*/

/*

    977. Squares of a Sorted Array

    Given an integer array nums sorted in ascending order, return an array of the squares of each number sorted in ascending order.
*/

var sortedSquares = function (nums) {
  let result = new Array(nums.length).fill(0);
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  for (let index = rightPointer; index >= 0; index--) {
    if (Math.abs(nums[leftPointer]) > Math.abs(nums[rightPointer])) {
      result[index] = nums[leftPointer] * nums[leftPointer];
      leftPointer++;
    } else {
      result[index] = nums[rightPointer] * nums[rightPointer];
      rightPointer--;
    }
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

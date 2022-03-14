/*
    Search Insert Position

    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);
    if (nums[pivot] === target) {
      return pivot;
    } else if (target < nums[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 4, 6], 5));

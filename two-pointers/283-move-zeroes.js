/*

    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.

    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

    Input: nums = [0]
    Output: [0]

*/

var moveZeroes = function (nums) {
  let lastNonZeroEl = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      nums[lastNonZeroEl++] = nums[index];
    }
  }

  for (let index = lastNonZeroEl; index < nums.length; index++) {
    nums[index] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));

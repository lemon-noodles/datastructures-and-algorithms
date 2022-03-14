/*
    189. Rotate Array

    Given an array, rotate the array to the right by k steps, where k is non-negative.

    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

var reverse = function (arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length; // needed when the length of nums is 1
//   console.log(k)
  reverse(nums, 0, nums.length - 1);
  //   console.log(nums);
  reverse(nums, 0, k - 1);
  //   console.log(nums);
  reverse(nums, k, nums.length - 1);
  return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1], 2));

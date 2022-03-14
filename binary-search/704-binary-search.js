/* 
    Binary Search

    Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

    You must write an algorithm with O(log n) runtime complexity.
*/

const binary_search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);
    if (arr[pivot] === target) {
      return pivot;
    } else if (target < arr[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return -1;
};
console.log(binary_search([-1, 0, 3, 5, 9, 12], 9));

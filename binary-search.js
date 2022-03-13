/*
    Can be easily achieved using a single while loop
    Best search for sorted array
    O(log n)
*/

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
// console.log(binary_search([-1, 0, 3, 5, 9, 12], 9));

/*
    First Bad Version

    You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

    Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

    You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
*/

const isBadVersion = (blah) => {
  if (blah >= 2) {
    return true;
  }

  return false;
};

// [f,f,f,t,t]
const product_manager = (n) => {
  let left = 1;
  let right = n;
  while (left < right) {
    let pivot = left + Math.floor((right - left) / 2);
    if (isBadVersion(pivot)) {
      right = pivot;
    } else {
      left = pivot + 1;
    }
  }
  return left;
};
// console.log(product_manager(5));

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

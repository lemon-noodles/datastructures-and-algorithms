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
console.log(product_manager(5));

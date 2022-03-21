/*

    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Input: nums = [3,2,4], target = 6
    Output: [1,2]

    Input: nums = [3,3], target = 6
    Output: [0,1]

*/

var twoSum = function (nums, target) {
  let hash = {};
  let index = 0;
  while (index < nums.length) {
    let complementNeeded = target - nums[index];
    if (hash[complementNeeded] !== undefined) {
      return [hash[complementNeeded], index];
    }

    hash[nums[index]] = index;
    index++;
  }
};

var twoSumWithSortedInput = function (nums, target) {

};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

/*

    Brute Force technique would be to use 2 arrays to loop over the array
    Time complexity is O(n*n)
    Space complexity is O(1)


    In the approach above we've used a hash table
    Time complexity is O(n)
    Space complexity is O(n)

    two sum family of problems
    https://yngyuan.github.io/post/two-sum-and-some-more/

*/

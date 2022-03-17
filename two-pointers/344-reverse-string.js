/*

    Write a function that reverses a string. The input string is given as an array of characters s.

    You must do this by modifying the input array in-place with O(1) extra memory.

    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

*/

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

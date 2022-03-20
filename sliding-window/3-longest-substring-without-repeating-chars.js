/*
    Given a string s, find the length of the longest substring without repeating characters.

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.


    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function (s) {
  let hash = {};

  let max = 0;
  let start = 0;

  for (let index = 0; index < s.length; index++) {
    if (hash[s[index]] !== undefined) {
      start = Math.max(start, hash[s[index]] + 1);
    }
    hash[s[index]] = index;
    max = Math.max(max, index - start + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

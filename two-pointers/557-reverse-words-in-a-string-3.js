/*

    Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

    Input: s = "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"

*/

var reverseString = function (str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }

  return str.join("");
};

var reverseWords = function (s) {
  s = s.split(" ");
  let index = 0;
  while (index < s.length) {
    s[index] = reverseString(s[index].split(""));
    index++;
  }
  return s.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));

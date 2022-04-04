/*

    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

    Input: s = "()"
    Output: true

    Input: s = "()[]{}"
    Output: true

    Input: s = "(]"
    Output: false

*/

var isValid = function (s) {
  const map = { ")": "(", "}": "{", "]": "[" };
  const stk = [];
  for (let char of s) {
    if (char === ")" || char === "}" || char === "]") {
      if (stk.pop() !== map[char]) {
        return false;
      }
    } else {
      stk.push(char);
    }
  }

  return stk.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));

/*

    Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.

    Input: head = [1,2,3,4,5]
    Output: [3,4,5]

    Input: head = [1,2,3,4,5,6]
    Output: [4,5,6]

*/

var middleNode = function (head) {
  let left = 0;
  let right = head.length - 1;

  let mid = left + Math.ceil((right - left) / 2);
  return mid;
};

console.log(middleNode([1, 2, 3, 4, 5]));
console.log(middleNode([1, 2, 3, 4, 5, 6]));

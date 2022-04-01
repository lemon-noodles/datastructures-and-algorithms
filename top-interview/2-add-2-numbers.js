/*

    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

    Input: l1 = [0], l2 = [0]
    Output: [0]

    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let list1 = new ListNode(0);

  console.log(l1);
  console.log(l2);

  return list.next;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// console.log(addTwoNumbers([0], [0]));
// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// 465
// 342
// = 807

// 99999999
//     9999
// = 10009998

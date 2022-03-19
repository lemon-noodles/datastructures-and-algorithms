/*

    Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.

    Input: head = [1,2,3,4,5]
    Output: [3,4,5]

    Input: head = [1,2,3,4,5,6]
    Output: [4,5,6]

*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNode([1, 2, 3, 4, 5]));
console.log(middleNode([1, 2, 3, 4, 5, 6]));

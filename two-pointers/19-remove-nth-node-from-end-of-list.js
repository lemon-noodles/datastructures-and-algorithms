/*

    Given the head of a linked list, remove the nth node from the end of the list and return its head.

    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]

    Input: head = [1], n = 1
    Output: []

    Input: head = [1,2], n = 1
    Output: [1]

*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let index = 0; index < n; index++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast?.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
console.log(removeNthFromEnd([1], 1));

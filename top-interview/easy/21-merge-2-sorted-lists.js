/*

    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.

    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]

    Input: list1 = [], list2 = []
    Output: []

    Input: list1 = [], list2 = [0]
    Output: [0]

*/

import convertArrayToList from "../../convertArrayToList.js";
import convertListToArray from "../../convertListToArray.js";

console.log(convertArrayToList([1, 2, 4]));

var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

let res = mergeTwoLists(
  convertArrayToList([1, 2, 4]),
  convertArrayToList([1, 3, 4])
);
res = convertListToArray(res);

console.log(res);
// console.log(mergeTwoLists([], []));
// console.log(mergeTwoLists([], [0]));

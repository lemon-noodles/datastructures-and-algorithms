function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const convertArrayToList = (arr) => {
  if (arr.length === 0) return null;
  let head, list;
  head = list = new ListNode(arr[0]);
  for (let index = 1; index < arr?.length; index++) {
    list.next = new ListNode(arr[index]);
    list = list.next;
  }
  return head;
};

export default convertArrayToList;

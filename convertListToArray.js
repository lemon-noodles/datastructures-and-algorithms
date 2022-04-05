const convertListToArray = (list) => {
  let arr = [];
  while (list.next !== null) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
};

export default convertListToArray;

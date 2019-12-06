/** 
 * 输入：一个环形单向链表的头节点head和报数的值m
 * 返回：最后生存下来的节点，且这个节点自己组成环形单向链表，其他节点都删掉
*/

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const josephusKill = (head, m) => {
  if (!head && head.next === head || m < 1) {
    return head;
  }
  
  const last = head;
  
  // 获取尾节点
  while (last.next !== head) {
    last = last.next;
  }
  
  let count = 0;
  
  while (head !== last) {
    if (++count === m) {

      // 此时last为要删除的节点
      last.next = head.next;
      count = 0;
    } else {
      last = last.next;
    }
    // 循环过程中， head last同时移动
    // 当只剩一个节点时， head === last.next
    head = last.next;
  }

  return head;
};
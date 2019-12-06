/** 
 * 给定链表的头结点，实现删除链表的中间结点的函数
 * 例如:
 * 不删除任何结点；
 * 1 -> 2，删除结点1；
 * 1 -> 2 -> 3，删除结点2；
 * 1 -> 2 -> 3 -> 4,删除结点2；
 * 1 -> 2 -> 3 -> 4 -> 5,删除结点3；
*/

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const arr = [1,2,3,4,5];

const head = new Node()

const nodeArr = arr.map(item => new Node(item));

for (let i = 0; i < arr.length; i++) {
  if (nodeArr[i+1]) {
    nodeArr[i].next = nodeArr[i+1];
  }
}

const removeMidNode = (head) => {
  if (!head || !head.next) {
    return head;
  }

  if (!head.next.next) {
    return head.next;
  }

  let pre = head;
  let cur = head.next.next;
  
  // 快慢指针
  while (cur.next && cur.next.next) {
    pre = pre.next;
    cur = cur.next.next;
  }

  pre.next = pre.next.next;

  
  return head;
}

let result = removeMidNode(nodeArr[0]);

while (result) {
  console.log(result);
  result = result.next;
}
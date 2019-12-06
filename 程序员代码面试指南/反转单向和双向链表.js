/**
 * 分别实现反转单向链表和反转双向链表的函数
 *
*/

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const arr = [1,2,3,4,5];

const head = new Node();

const nodeArr = arr.map(item => new Node(item));

for (let i = 0; i < arr.length; i++) {
  if (nodeArr[i+1]) {
    nodeArr[i].next = nodeArr[i+1];
  }
}

const reverseList = (head) => {
  let pre = null; // 用来反转head
  let next = null; // 用来移动head
  
  while (head) {
    next = head.next;
    
    head.next = pre;
    pre = head;

    head = next;
  }
  
  return pre;
};

console.log(reverseList(nodeArr[0]));

class DoubleNode {
  constructor(value, last, next) {
    this.value = value;
    this.last = last;
    this.next = next;
  }
}

const nodeArr2 = arr.map(item => new DoubleNode(item));

for (let i = 0; i < arr.length; i++) {
  if (nodeArr2[i+1]) {
    nodeArr2[i].next = nodeArr2[i+1];
  }
  
  if (nodeArr2[i-1]) {
    nodeArr2[i].last = nodeArr2[i-1];
  }
}

const reverseDoubleList = (head) => {
  let pre = null; // 用来反转head
  let next = null; // 用来移动head
  
  while (head) {
    next = head.next;
    head.next = pre;
    head.last = next; // 多出的步骤
    pre = head;
    head = next;
  }
  
  return pre;
};

console.log(reverseDoubleList(nodeArr2[0]));
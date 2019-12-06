/**
 * 假设链表中每一个节点的值都在0-9之间，那么链表整体就可以代表一个整数。
 * 例如： 9 -> 3 -> 7，可以代表整数937。
 * 给定两个这种链表的头结点head1和head2，请生成代表两个整数相加值的结果链表。
 * 例如：链表1为9 -> 3 -> 7，链表2为6 -> 3，最后生成的结果链表为1 -> 0 -> 0 -> 0。
 * 一种实现方法是将两个链表先计算处各自所代表的整数，然后求出两个整数的和，最后将这个和转换成链表的形式。
 * 但链表可能很长，表达一个很大的整数，因此转换整数可能溢出
*/

// 方法一：利用栈


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const addList = (head1, head2) => {
  const s1 = [];
  const s2 = [];
  
  while (head1) {
    s1.push(head1.value);
    head1 = head1.next;
  }
  
  while (head2) {
    s2.push(head2.value);
    head2 = head2.next;
  }
  
  let ca = 0,
      n1 =0,
      n2 = 0,
      n = 0;

  let node = null;
  let pre = null;
  
  while (s1.length ||s2.length) {
    n1 = s1.length ? s1.pop(): 0;
    n2 = s2.length ? s2.pop(): 0;
    n = n1 + n2 + ca;

    // 从链表尾节点开始向前
    pre = node;
    node = new Node(n%10);
    node.next = pre;
    ca = parseInt(n/10);
  }
  
  // 首节点特殊处理
  if (ca === 1) {
    pre = node;
    node = new Node(1);
    node.next = pre;
  }
  
  return node;
}

// 方法二： 利用链表的逆序求解，可以省掉用栈的空间

const addList2 = (head1, head2) => {
  head1 = reverseList(head1);
  head2 = reverseList(head2);
  
  let ca = 0,
      n1 = 0,
      n2 = 0,
      n = 0;

  let c1 = head1;
  let c2 = head2;

  let node = null;
  let pre = null;
  
  while (c1 || c2) {
    n1 = c1 ? c1.value : 0;
    n2 = c2 ? c2.value : 0;
    
    n = n1 + n2 + ca;
    
    pre = node;
    node = new Node(n%10);
    node.next = pre;
    
    ca = parseInt(n/10);

    c1 = c1 ? c1.next : null;
    c2 = c2 ? c2.next : null;
  }
  
  if (ca === 1) {
    pre = node;
    node = new Node(1);
    node.next = pre;
  }
  
  // 还原
  reverseList(head1);
  reverseList(head2);
  
  return node;
};

const reverseList = (head) => {
  let pre = null;
  let next = null;
  
  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  
  return pre;
};

const arr = [1,2,3,4,5];

const nodeArr = arr.map(item => new Node(item));
const nodeArr2 = arr.map(item => new Node(item));

for (let i = 0; i < arr.length; i++) {
  if (nodeArr[i+1]) {
    nodeArr[i].next = nodeArr[i+1];
  }
}

for (let i = 0; i < arr.length; i++) {
  if (nodeArr2[i+1]) {
    nodeArr2[i].next = nodeArr2[i+1];
  }
}
let result = addList(nodeArr[0], nodeArr2[0])
let result2 = addList2(nodeArr[0], nodeArr2[0]);

while (result) {
  console.log(result);
  result = result.next;
}

while (result2) {
  console.log(result2);
  result2 = result2.next;
}
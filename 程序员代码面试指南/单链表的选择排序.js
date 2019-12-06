/**  
 * 给定一个无序单链表的头结点head，实现单链表的选择排序
*/

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const selectionSort = (head) => {
  let tail = null,
      cur = head,
      smallPre = null,
      small = null;

  while (cur) {
    small = cur;
    smallPre = getSmallestPreNode(cur);

    // 删除最小节点
    if (smallPre) {
      small = smallPre.next;
      smallPre.next = small.next;
    }
    
    cur = cur === small ? cur.next : cur;
    
    if (tail) {
      tail.next = small;
    } else {
      head = small;
    }

    tail = small;
  }
  
  return head;
};

const getSmallestPreNode = (head) => {
  let smallPre = null,
      small = head,
      pre = head,
      cur = head.next;

      while (cur) {
        if (cur.value < small.value) {
          smallPre = pre;
          small = cur;
        }

        pre = cur;
        cur = cur.next;
      }
    return smallPre;
};

const arr = [3,2,1,4,5];

const head = new Node()

const nodeArr = arr.map(item => new Node(item));

for (let i = 0; i < arr.length; i++) {
  if (nodeArr[i+1]) {
    nodeArr[i].next = nodeArr[i+1];
  }
}

let result = selectionSort(nodeArr[0]);

while (result) {
  console.log(result);
  result = result.next;
}


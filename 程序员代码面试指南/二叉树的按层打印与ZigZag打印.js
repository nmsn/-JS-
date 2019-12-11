/** 
 * 二叉树的按层打印与ZigZag打印
 * 给定一棵二叉树的头节点，分别实现按层打印和ZigZag打印二叉树的函数
 */

 
class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// 按层打印的实现

const priintByLevel = () => {
  if (!head) {
    return ;
  }
  
  const queue = [];
  let level = 1;
  let last = head;
  let nLast = null;
  
  queue.push(head);
  
  console.log(level);
  
  while (queue.length) {
    head = queue.shift();
    
    console.log(head.value);
    
    if (head.left) {
      queue.push(head.left);
      nLast = head.left;
    }
    
    if (head.right) {
      queue.push(head.right);
      nLast = head.right;
    }
    
    if (head === last && queue.length) {
      console.log(level++);
      last = nLast;
    }
  }
};

// ZigZag打印的实现

const printByZigZag = (head) => {
  if (!head) {
    return ;
  }
  
  const dq = [];
  
  let level = 1;
  let lr = true;
  let last = head;
  let nLast = null;
  
  dq.unshift(head);
  
  pringLevelAndOrientation(level++, lr);
  
  while (dq.length) {
    if (lr) {
      head = dq.shift();
      
      if (head.left) {
        nLast = nLast || head.left;
        dq.push(head.left);
      }
      
      if (head.right) {
        nLast = nLast || head.right;
        dq.push(head.right);
      }
      
    } else {
      head = dq.pop();
      
      if (head.right) {
        nLast = nLast || head.right;
        dq.unshift(head.right);
      }
      
      if (head.left) {
        nLast = nLast || head.left;
        dq.unshift(head.left);
      }
    }
    
    console.log(head.value);
    
    if (head === last && dq.length) {
      lr = !lr;
      last = nLast;
      nlast = null;
      pringLevelAndOrientation(level++, lr);
    }
  }
};

const pringLevelAndOrientation = (level, lr) => {
  console.log(level);
  console.log(lr ? 'left to right' : 'right to left');
};
/**
 * 用递归喝非递归方式，分别按照二叉树先序、中序和后序打印所有的节点。
 * 我们约定：先序遍历顺序为根、左、右；中序遍历顺序为左、右、根；后序遍历为左、右、根
 */

 // 递归方式
 
class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const preOrderRecur = (head) => {
  if (!head) {
    return ;
  }
  
  // 当前节点
  console.log(head.value);
  
  preOrderRecur(head.left);
  preOrderRecur(head.right);
};

const inOrderRecur = (head) => {
  if (!head) {
    return ;
  }
  
  inOrderRecur(head.left);
  
  // 当前节点
  console.log(head.value);
  
  inOrderRecur(head.right);
};

const posOrderRecur = (head) => {
  if (!head) {
    return ;
  }
  
  posOrderRecur(head.left);
  posOrderRecur(head.right);
  
    // 当前节点
    console.log(head.value);
};

// 非递归算法

const preOrderUnRecur = (head) => {
  
  if (head) {
    const stack = [];

    stack.push(head);
    
    while (stack.length) {
      head = stack.pop();
      
      console.log(head);
      
      if (head.right) {
        stack.push(head.right);
      }
      
      if (head.left) {
        stack.push(head.left);
      }
    }
  }
};

const  inOrderUnRecur = (head) => {
  if (head) {
    const stack = [];
    while (stack.length || head) {
      if (head) {
        stack.push(head);
        head = head.left;
      } else {
        head = stack.pop();
        console.log(head);
        head = head.right;
      }
    }
  }
};
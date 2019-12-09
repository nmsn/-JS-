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

  console.log(head.value);
  
  preOrderRecur(head.left);
  preOrderRecur(head.right);
};

const inOrderRecur = (head) => {
  if (!head) {
    return ;
  }
  
  inOrderRecur(head.left);

  console.log(head.value);
  
  inOrderRecur(head.right);
};

const posOrderRecur = (head) => {
  if (!head) {
    return ;
  }
  
  posOrderRecur(head.left);
  posOrderRecur(head.right);

    console.log(head.value);
};

// 非递归算法

const preOrderUnRecur = (head) => {
  
  if (head) {
    const stack = [];

    stack.push(head);

    while (stack.length) {
      head = stack.pop();

      console.log(head.value);

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
        console.log(head.value);
        head = head.right;
      }
    }
  }
};

const posOrderUnRecur1 = (head) => {
  if (head) {
    const s1 = [];
    const s2 = [];
    s1.push(head);

    while (s1.length) {
      head = s1.pop();

      s2.push(head);

      if (head.left) {
        s1.push(head.left);
      }

      if (head.right) {
        s1.push(head.right);
      }
    }

    while (s2.length) {
      console.log(s2.pop());
    }
  }
};


// 一个栈解决后序遍历
const posOrderRecur2 = (h) => {
  if(h) {
    const stack = [];
    stack.push(h);
    let c = null;
    
    while (stack.length) {
      if (c.left && h !== c.left && h !== c.right) {
        stack.push(c.left);
      } else if (c.right && h !== c.right) {
        stack.push(c.right);
      } else {
        console.log(stack.pop());
        h = c;
      }
    }
  }
};
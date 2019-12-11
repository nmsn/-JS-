/** 
 * 给定一棵二叉树的头节点head，已知其中所有节点的值都不一样，找到含有节点最多的搜索二叉树子树，并返回这棵子树的头节点
*/

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const biggestSubBST = (head) => {
  const record = [];
  
  return posOrder(head, record);
};

const posOrder = (head, record) => {
  if (!head) {
    record[0] = 0;
    record[1] = Infinity;
    record[2] = -Infinity;
    
    return null;
  }
  
  const value = head.value;
  
  const left = head.left;
  const right = head.right;
  
  const lBST = posOrder(left, record);
  
  const lSize = record[0];
  const lMin = record[1];
  const lMax = record[2];
  
  const rBST = posOrder(reight, record);
  
  const rSize = record[0];
  const rMin = record[1];
  const rMax = record[2];
  
  record[1] = Math.min(lMin, value);
  record[2] = Math.max(rMax, value);

  if (left === lBST && right === rBST && lMax < value && value < rMin) {
    record[0] = lSize + rSize + 1;
    return head;
  }
  
  record[0] = Math.max(lSzie, rSize);
  
  return lSize > rSize ? lBST : rBST;
};

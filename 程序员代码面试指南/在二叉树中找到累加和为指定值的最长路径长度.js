/**  
 * 给定一棵二叉树的头节点head和一个32位整数sum，
 * 二叉树节点值类型为整型，求累加和为sum的最长路径长度。
 * 路径是指此从某个节点往下，每次最多选择一个孩子节点或者不选所形成的节点链
*/


class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const getMaxLength = (head, sum) => {
  const sumMap = new Map();
  
  sumMap.set(0, 0);
  
  return preOrder(head, sum, 0, 1, 0, sumMap);
};

const preOrder = (head, sum, preSum, level, maxLen, sumMap) => {
  if (!head) {
    return maxLen;
  }
  
  // 当前节点的累计和
  const curSum = preSum + head.value;
  
  if (!sumMap.get(curSum)) {
    sumMap.set(curSum, level);
  }
  
  if (sumMap.get(curSum - sum)) {
    maxLen = Math.max(level - sumMap.get(curSum - sum), maxLen);
  }
  
  maxLen = preOrder(head.left, sum, curSum, level + 1, maxLen, sumMap);
  maxLen = preOrder(head.right, sum, curSum, level + 1, maxLen, sumMap);
  
  if (level === sumMap.get(curSum)) {
    sumMap.delete(curSum);
  }
  
  return maxLen;
  
};
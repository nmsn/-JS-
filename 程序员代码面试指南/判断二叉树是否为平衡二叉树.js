/** 
 * 平衡二叉树的性质为：要么是一棵空树，要么任何一个节点的的左右子树高度差的绝对值不超过1.给定一棵二叉树的头节点head，判断这棵二叉树是否为平衡二叉树。
 */

const isBalance = (head) => {
  const res = [];
  res[0] = true;
  getHeight(head, 1, res);
  return res[0];
};
 
const getHeight = (head, level, res) => {
  if (!head) {
    return level;
  }
  
  const lH = getHeight(head.left, level + 1, res);
  
  if (!res[0]) {
    return level;
  }
  
  const rH = getHeight(head.right, level + 1, res);
  
  if (!res[0]) {
    return level;
  }
  
  if (Math.abs(lH -rH) > 1) {
    res[0] = false;
  }
  
  return Math.max(lH, rH);
};
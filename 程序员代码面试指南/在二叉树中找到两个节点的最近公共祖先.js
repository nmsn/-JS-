/** 
 * 给定一棵二叉树的头节点head，以及这棵树中的两个节点o1和o2，
 * 请返回o1和o2的最近公共祖先节点
 */

const lowestAncestor = (head, o1, o2) => {
  if (!head || head === o1 || head === o2) {
    return head;
  }
  
  const left = lowestAncestor(head.left , o1, o2);
  const right = lowestAncestor(head.right, o1, o2);
  
  if (!left && !right) {
    return head;
  }
  
  return left || right;
};
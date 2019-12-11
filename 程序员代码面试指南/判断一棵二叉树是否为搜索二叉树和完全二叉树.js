/**  
 * 给定一个二叉树的头节点head，已知其中没有重复值的节点，实现两个函数分别判断这棵二叉树是否是搜索二叉树和完全二叉树
 */

// 搜索二叉树 只要改写二叉树中序遍历，在遍历过程中看节点值是否都是递增的即可

/**  
 * 完全二叉树
 * 1.按层遍历二叉树，从每层的左边向右边依次遍历所有的节点
 * 2.如果当前节点有右孩子，但没有左孩子，直接返回false
 * 3.如果当前节点并不是左右孩子全有，那之后的节点必须都为叶节点，否则返回false
 * 4.遍历过程中如果不返回false，遍历结束后返回true
 */

const isCBT = (head) => {
  if (!head) {
    return true;
  }
  
  const queue = [];
  
  let leaf = false;
  
  let l = null,
      r = null;

  queue.push(head);
  
  while (queue.length) {
    head = queue.shift();
    
    l = head.left;
    r = head.right;
    
    if (
      (leaf && (l || r)) // 叶子节点且同时有孩子节点
      || (!l && r) // 只有右节点没有左节点
    ) {
      return false;
    }
    
    if (l) {
      queue.push(l);
    }
    
    if (r) {
      queue.push(r);
    } else {
      
      // 后续节点都必须为叶子节点
      leaf = true;
    }
  }
  
  return true;
};
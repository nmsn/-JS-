/** 
 * 给定一棵二叉树的头节点head，按照如下两种标准分别实现二叉树边界节点的逆时针打印
 * 标准一：
 * 1.头节点为边界节点
 * 2.叶节点为边界节点
 * 3.如果节点在其所在的层中是最左或最右的，那也是边界节点
 * 标准二：
 * 1.头节点为边界节点
 * 2.叶节点为边界节点
 * 3.树左边界延伸下去的路径为边界节点
 * 4.树右边界延伸下去的路径为边界节点
 */

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// 标准1

const printEdge1 = (head) => {
  if (!head) {
    return ;
  }
  
  let height = getHeight(head, 0);
  
  const edgeMap = new Array(height);
  
  setEdgeMap(head, 0, edgeMap);
  
  // 打印左边界
  for (let i = 0; i < edgeMap.length; i++) {
    console.log(edgeMap[i][0].value);
  }
  
  // 打印既不是左边界，又不是右边界的叶子节点
  printLeafNotInMap(head, 0, edgeMap);
  
  // 打印右边界
  for (let i = edgeMap.length; i > -1; i--) {
    if (edgeMap[i][0] !== edgeMap[i][1]) {
      console.log(edgeMap[i][l].value);
    }
  }
};

// l为累计层数
const getHeight = (h, l) => {
  if (h === null) {
    return l;
  }
  return Math.max(getHeight(h.left, l + 1), getHeight(h.right, l + 1));
};

// 计算左右边界值
const setEdgeMap = (h, l, edgeMap) => {
  if (!h) {
    return ;
  }

  edgeMap[l][0] = edgeMap[l][0] || h; // 第一次计算出来的就是最左节点
  edgeMap[l][1] = h; // 最右节点每次都会被新的右边节点覆盖，最后一次计算出来的就是最右节点

  setEdgeMap(h.left, l + 1, edgeMap);
  setEdgeMap(h.right, l + 1, edgeMap);
};

const printLeafNotMap = (h, l, m) => {
  if (!h) {
    return ;
  }

  if (h.left === null && h.right === null && h !== m[l][0] && h !== m[l][1]) {
    console.log(h.value);
  }

  printLeafNotMap(h.left, l + 1, m);
  printLeafNotMap(h.right, l + 1, m);
};

// 标准2

const printEdge2 = (head) => {
  if (head === null) {
    return ;
  }
  
  console.log(head.value);
  
  if (head.left && head.right) {
    printLeftEdge(head.left, true);
    printRightEdge(head.right, true);
  } else {
    printEdge2(head.left ? head.left : head.right);
  }
};

const printLeftEdge = (h, print) => {
  if (!h) {
    return ;
  }
  
  if (print || (!h.left || !h.right)) {
    console.log(h.value);
  }

  printLeftEdge(h.left, print);
  printLeftEdge(h.right, print && !h.left)
};

const prinRightEdge = (h, print) => {
  if (!h) {
    return ;
  }
  
  printRightEdge(h.left, print && !h.right);
  prinRightEdge(h.right, print);
  
  if (print || (!h.left && !h.right)) {
    console.log(h.value);
  }
};
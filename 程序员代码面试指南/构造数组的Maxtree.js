/** 
 * 一个数组的MaxTree定义如下
 * - 数组必须没有重复元素
 * - MaxTree是一颗二叉树，数组的每一个值对应一个二叉树结点
 * - 包括MaxTree树在内且在其中的每一棵子树上，值最大的结点都是树的头
 *
 * 给定一个没有重复元素的数组arr，写出生成这个数组的MaxTree的函数，要求如果数组长度为N，则时间复杂度为O(N)，额外空间复杂度O(N)
*/

const arr = [3,4,5,1,2];

class Node {
  constructor(value) {
    this.value = value;
  }
}

const getMaxTree = (arr) => {
  const nArr = [];
  for (let i = 0; i < arr.length; i++) {
    nArr[i] = new Node(arr[i]);
  }
  
  const stack = [];
  
  const lBigMap = new Map();
  const rBigMap = new Map();
  
  for (i = 0; i < nArr.length; i++) {
    const curNode = nArr[i];

    while (stack.length && stack[stack.length - 1].value < curNode.value) {
      popStackSetMap(stack, lBigMap)
    }
    
    stack.push(curNode);
  }
  
  while(stack.length) {
    popStackSetMap(stack, lBigMap);
  }
  
  for (let i = nArr.length - 1; i !== -1; i--) {
    const curNode = nArr[i];
    
    while (stack.length && stack[stack.length - 1].value < curNode.value) {
      popStackSetMap(stack, rBigMap);
    }
    stack.push(curNode);
  }
  
  while(stack.length) {
    popStackSetMap(stack, rBigMap);
  }
  
  const head = undefined;
  
  for (let i = 0; i < nArr.length; i++) {
    const curNode = nArr[i];
    const left = lBigMap.get(curNode);
    const right = rBigMap.get(curNode);
    
    if (left === undefined && right === undefined) {
      head = curNode;
    } else if (left === undefined) {
      if (right.left === undefined) {
        right.left = curNode;
      } else {
        right.right = curNode;
      }
    } else if (right === undefined) {
      if (left.left === undefined) {
        left.left = curNode;
      } else {
        left.right = curNode;
      }
    } else {
      const parent = left.value < right.value ? left : right;
      if (parent.left === undefined) {
        parent.left = curNode;
      } else {
        parent.right = curNode;
      }
    }

    return head;
  }
  
};

const popStackSetMap = (stack, map) => {
  const popNode = stack.pop();
  
  if (stack.length) {
    map.set(popNode, stack[stack.length - 1])
  } else {
    map.delete(popNode);
  }
};

console.log(getMaxTree(arr));


/**
 * 给定一个数组arr，返回子数组的最大累加和
 * 例如，arr=[1,-2,3,5,-2,6,-1]，所有的子数组中，[3,5,-2,6]可以累加出最大的和12，所以返回12.
 */

/**
 * 如果一个矩阵一共有k行且限定必须含有k行元素的情况下，
 * 我们只要把矩阵中每一列的k个元素累加生成一个累加数组，
 * 然后求出这个数组的最大累加和，
 * 这个最大累加和就是必须含有k行元素的子矩阵中的最大累加和
 */

const maxSum = (arr) => {
  if (!arr || !arr.length) {
    return 0;
  }
  
  let max = Infinity;
  let cur = 0;
  
  for (let i = 0; i < arr.length; i++) {
    cur += arr[i];
    max = Math.max(max, cur);
    cur = cur < 0 ? 0 : cur;
  }
  
  return max;
};
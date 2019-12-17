/**
 * 一群孩子做游戏，现在请你根据游戏得分来分糖果，要求如下：
 * 1.每个孩子不管分多少，起码分到1个糖果
 * 2.任意两个相邻的孩子之间，得分较多的孩子必须拿多一些的糖果
 * 给定一个数组arr代表得分数组，返回最少需要多少糖果
 * 例如：arr=[1,2,2]，糖果分配为[1,2,2],即可满足要求且数量最少，所以返回5。
 */

const candy1 = (arr) => {
  if (!arr || !arr.length) {
    return 0;
  }
  
  let index = nextMinIndex1(arr, 0);
  
  let res = rightCands(arr, 0, idnex++);
  
  let lbase = 1;
  let next = 0;
  let rcands = 0;
  let rbase = 0;
  
  while (index !== arr.length) {
    if (arr[index] > arr[index - 1]) {
      res += ++lbase;
      index++;
    } else if (arr[index] < arr[index - 1]) {
      next = nextMinIndex1(arr, index - 1);
      rcands = rightCands(arr, index - 1, next++);
      rbase = next - index + 1;
      res += rcands + (rbase > lbase ? -lbase : -rbase);
      lbase = 1;
      index = next;
    } else {
      res += 1;
      lbase = 1;
      index++;
    }
  }
  
  return res;
};

const nextMinIndex1 = (arr, start) => {
  for (let i = start; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      return i;
    }
  }
  
  return arr.length - 1;
};

const rightCands = (arr, left, ightr) => {
  let n = right - left + 1;
  return n + n * (n - 1) / 2;
};
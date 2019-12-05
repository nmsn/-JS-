/**
 * 给定数组arr和整数num，共返回有多少个子数组满足如下情况
 * max(arr[i...j]) - min(arr[i...j]) <= num
 * max(arr[i...j])表示子数组arr[i...j]中的最大值，min(arr[i...j])表示子数组arr[i...j]中的最小值
 */

const getNum = (arr, num) => {
  if (arr === null || arr.length === 0) {
    return 0;
  }
  
  const qmax = [];
  const qmin = [];
  
  let i = 0;
  let j = 0;
  let res = 0;
  
  while (i < arr.length) {
    while (j < arr.length) {
      while (qmin.length && arr[qmin[qmin.length - 1]] >= arr[j]) {
        qmin.pop();
      }
      
      qmin.push(j);
      
      while (qmax.length && arr[qmax[qmax.length - 1]] >= arr[j]) {
        qmax.pop();
      }
      
      qmax.push(j);
      
      if (arr[qmax[0]] - arr[qmin[0]] > num) {
        break;
      }
      j++;
    }
    
    
    if(qmin[0] === i) {
      qmin.shift();
    }
    if(qmax[0] === i) {
      qmax.shift();
    }
    
    res += j - i;
    i++;
  }
  return res;
};
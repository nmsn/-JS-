/** 
 * 给定一个无序数组，求出需要排序的最短子数组长度
 * 例如：arr[1,5,3,4,2,6,7]返回4，因为只有[5,3,4,2]需要排序
*/

const getMinLength = (arr) => {
  if (!arr || arr.length < 2) {
    return 0;
  }
  
  let min = arr[arr.length - 1];
  
  let noMinIndex = -1;
  
  for (let i = arr.length - 2; i > -1; i--) {
    if (arr[i] > min) {
      noMinIndex = i;
    } else {
      min = Math.min(min, arr[i]);
    }
  }
  
  if (noMinIndex === -1) {
    return 0;
  }
  
  let max = arr[0];
  
  let noMaxIndex = -1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < max) {
      noMaxIndex = i;
    } else {
      max = Math.max(max, arr[i]);
    }
  }
  
  return noMaxIndex - noMinIndex + 1;
};
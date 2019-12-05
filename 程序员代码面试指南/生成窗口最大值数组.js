/** 
 * 有一个整型数组arr和一个大小为w的窗口从数组的最左边滑到最右边，
 * 窗口每次向右边滑一个位置
 * 例如，数组为[4,3,5,4,3,3,6,7],窗口大小为3时:
 * 
 * [4 3 5] 4 3 3 6 7 窗口中最大值为5
 * 4 [3 5 4] 3 3 6 7 窗口中最大值为5
 * 4 3 [5 4 3] 3 6 7 窗口中最大值为5
 * 4 3 5 [4 3 3] 6 7 窗口中最大值为4
 * 4 3 5 4 [3 3 6] 7 窗口中最大值为6
 * 4 3 5 4 3 [3 6 7] 窗口中最大值为7
 * 
 * 如果数组长度为n，窗口大小为w，则一共产生n-w+1个窗口的最大值
 * 
 * 实现一个函数
 * - 输入：整型数组arr，窗口大小为w
 * - 输出：一个长度为n-w+1的数组res，res[i]表示每一种窗口状态下的最大值
*/

const arr = [4,3,5,4,3,3,6,7];

const getMaxWindow = (arr, w) => {
  if (arr === null || w < 1 || arr.length < w) {
    return null;
  }
  
  const qmax = [];
  
  const res = [];
  
  let index = 0;
  
  for (let i = 0; i < arr.length; i++) {
    
    // 遍历到的元素大于等于qmax队尾元素
    while(qmax.length && arr[qmax[qmax.length - 1]] <= arr[i]) {
      qmax.pop();
    }
    qmax.push(i);
    
    // qmax队首元素过期脱离窗口
    if (qmax[0] === i - w) {
      qmax.shift();
    }
    
    // 从窗口最后一个位置开始赋值
    if (i >= w - 1) {
      res[index++] = arr[qmax[0]];
    }
  
  }
  
  return res;
}

console.log(getMaxWindow(arr, 3));
/**
 * 给定一个无序整型数组arr，找到数组中未出现的最小正整数。
 * arr=[-1,2,3,4]。返回1。
 * arr=[1,2,3,4]。返回5。
 */

const missNum = (arr) => {
  let l = 0;
  let r = arr.length;
  
  while (l < r) {
    if (arr[l] === l + 1) {
      l++;
    } else if (
      arr[l] <= 1
      || arr[l] > r
      || arr[arr[l] = 1] === arr[l]
    ) {
      arr[l] = arr[r--];
    } else {
      swap(arr, l, arr[l] -1);
    }
  }
};
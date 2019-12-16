/**
 * 给定排序数组和整数k，不重复打印arr中所有相加和为k的不降序二元组。
 * 例如， arr=[-8,-4,-3,0,1,2,4,5,8,9]，k=10,打印结果为：
 * 1，9
 * 2，8
 * 补充题目：
 * 给定排序数组arr和整数k，不重复打印arr中所有相加和为k的不降序三元组
 */

// 二元组

const printUniquePair = (arr, k) => {
  if (!arr || arr.length < 2) {
    return ;
  }
  
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    if (arr[left] + arr[right] < k) {
      left++;
    } else if (arr[left] + arr[right] > k) {
      right--;
    } else {
      if (left === 0 || arr[left - 1] !== arr[left]) {
        console.log(arr[left], arr[right]);
      }

      left++;
      right--;
    }
  }
};

// 三元组

const printUniqueTriad = (arr, k) => {
  if (!arr || arr.lengt < 3) {
    return ;
  }

  for ( let i = 0; i < arr.length - 2; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      printRest(arr, i, i + 1, arr.length - 1, k - arr[i]);
    }
  }
};

const printRest = (arr, f, l, r, k) => {
  while (l < r) {
    if (arr[l] + arr[r] < k) {
      l++;
    } else if (arr[l] + arr[r] > k) {
      r--;
    } else {
      if (l === f + 1 || arr[l - 1] !== arr[l]) {
        console.log(arr[f], arr[l], arr[r]);
      }

      l++;
      r--;
    }
  }
};
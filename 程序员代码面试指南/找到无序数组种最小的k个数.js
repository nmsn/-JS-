/**
 * 给定一个无序的整数数组arr，找到其中最小的k个数
 */

// O(Nlogk)

const getMinNumsByHeap = (arr, k) => {
  if (k < 1 || k > arr.length) {
    return arr;
  }
  
  const kHeap = [];
  
  // 前k个元素入栈，初始化
  for (let i = 0; i < k; i++) {
    heapInsert(kHeap, arr[i], i);
  }
  
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < kHeap[0]) {
      kHeap[0] = arr[i];
      heapify(kHeap, 0, k);
    }
  }
};


const heapInsert = (arr, value, index) => {
  arr[index] = value;
  
  while (index !== 0) {
    let parent = parseInt((index - 1) / 2);
    if (arr[parent] < arr[index]) {
      swap(arr, parent, index);
      index = parent;
    } else {
      break;
    }
  }
};

const heapify = (arr, index, heapSize) => {
  let left = index * 2 + 1;
  let right = index * 2 + 2;
  let largest = index;
  
  while (left < heapSize) {
    if (arr[left] > arr[index]) {
      largest = right;
    }
    
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }
    
    if (largest !== index) {
      swap(arr, largest, index);
    } else {
      break;
    }
    
    index = largest;
    
    left = index * 2 + 1;
    right = index * 2 + 2;
  }
};

const swap = (arr, index1, index2) => {
  let tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
};


// O(N) BFPRT算法

let len; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

const heapSort = arr => {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--; // 当前最大值换到队尾，不参与下一步互换
    heapify(arr, 0);
  }

  return arr;
};

const buildMaxHeap = arr => {
  // 建立大顶堆
  len = arr.length;

  for (let i = Math.floor(len / 2); i >= 0; i--) { // 从非叶子节点开始
    heapify(arr, i);
  }
};

const heapify = (arr, i) => {
  // 堆调整
  let left = 2 * i + 1, // 左子节点
    right = 2 * i + 2, // 右子节点
    largest = i;
    
  // len分隔已被排序不进行heapify的值
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) { // 当存在子节点大于当前节点
    swap(arr, i, largest);
    heapify(arr, largest);
  }
};

const swap = (arr, i, j) => {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};


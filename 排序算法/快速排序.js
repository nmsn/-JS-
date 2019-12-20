const quickSort = (arr, left, right) => {
  let len = arr.length,
      partitionIndex,
      left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

const partition = (arr, left ,right) => { // 分区操作
  let pivot = left, // 设定基准值（pivot）
      index = pivot + 1;
  for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


const partition2 = (arr, low, high) => {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }

    arr[low] = arr[high];

    while (low < high && arr[low] <= pivot) {
      ++low;
    }

    arr[high] = arr[low];
  }

  arr[low] = pivot;
  return low;
}

const quickSort2 = (arr, low, high) => {
  if (low < high) {
    let pivot = partition2(arr, low, high);
    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
}
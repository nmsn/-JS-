/**
 * N皇后问题是指再N*N的棋盘上要摆N个皇后，
 * 要求任何两个皇后不同行、不同列，也不再同一条斜线上。
 * 给定一个整数n，返回n皇后的摆法有多少种。
 */

const num1 = (n) => {
  if (n < 1) {
    return 0;
  }
  
  const record = [];
  
  return process1(0, record, n);
};
 
const process1 = (i, record, n) => {
  if (i === n) {
    return 1;
  }
  
  let res = 0;
  
  for (let j = 0; j < n; j++) {
    if (isValid(record, i, j)) {
      record[i] = j;
      res += process1(i + 1, record, n);
    }
  }
  
  return res;
};

const isValid = (record, i, j) => {
  // (i,j) 与已有棋子进行位置判断
  for (let k = 0; k < i; k++) {
    if (j === record[k] || Math.abs(record[k] - j) === Math.abs(i - k)) {
      return false;
    }
  }
  
  return true;
};
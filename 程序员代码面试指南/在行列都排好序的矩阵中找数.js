/** 
 * 给的那个一个有N*M的整型矩阵matrix和一个整数K，matrix的每一行和每一列都是排好序的。
 * 实现一个函数，判断K是否在matrix中。
 * 例如：
 * 0 1 2 5
 * 2 3 4 7
 * 4 4 4 8
 * 5 7 7 9
 * 如果K为7，返回true；如果K为6，返回false。
 */

const isContains = (matrix, K) => {
  let row = 0;
  let col = matrix[0].length - 1;
  
  while (row < matrix[0].length && col > -1) {
    if (K === matrix[row][col]) {
      return true;
    } else if (K < matrix[row][col]) {
      col--;
    } else {
      row++;
    }
  }
  
  return false;
};
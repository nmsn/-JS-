/**
 * 给定一个矩阵m，从左上角开始每次只能向右或者向下走，最后到达右下角的位置，
 * 路径上所有的数字累加起来就是路径和，返回所有的路径中最小的路径和
 */

const minPathSum1 = (m) => {
  if (!m || m.length === 0 || !m[0] || m[0].length === 0) {
    return 0;
  }
  const row = m.length;
  const col = m[0].length;

  const dp = [];

  dp[0][0] = m[0][0];

  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + m[i][0];
  }
  
  for (let j = 1; j < col; j++) {
    dp[0][j] = dp[0][j - 1] + m[0][j];
  }
  
  for (let i = 1; i < row; i++) {
    for (let j =1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + m[i][j];
    }
  }
  
  return dp[row - 1][col - 1];
};

const minPathSum2 = (m) => {
  if (!m || m.length === 0 || !m[0] || m[0].length === 0) {
    return 0;
  }
  
  let more = Math.max(m.length, m[0].length);
  let less = Math.min(m.length, m[0].length);
  
  const rowmore = more === m.length;
  
  const arr = [];
  
  arr[0] = m[0][0];
  
  for (let i = 1; i < less; i++) {
    arr[i] = arr[i - 1] + (rowmore ? m[0][i] : m[i][0]);
  }
  
  for (let i = 1; i < more; i++) {
    arr[0] = arr[0] + (rowmore ? m[i][0] : m[0][i]);
    
    for (let j = 1; j < less; j++) {
      arr[j] = Math.min(arr[j - 1], arr[j]) + (rowmore? m[i][j] : m[j][i]);
    }
  }
  return arr[less - 1];
};
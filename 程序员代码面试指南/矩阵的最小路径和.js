/**
 * 给定一个矩阵m，从左上角开始每次只能向右或者向下走，最后到达右下角的位置，
 * 路径上所有的数字累加起来就是路径和，返回所有的路径中最小的路径和
 */

const minPathSuml = (m) => {
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
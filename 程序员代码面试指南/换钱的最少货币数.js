/**
 * 给定数组arr，arr中所有的值都为正数且不重复。每个值代表一种面值的货币，每种面值的货币可以使用任意张，再给定一个整数aim代表要找的钱数，求组成aim的最少货币数
 */

const minConins1 = (arr, aim) => {
  if (!arr || !arr.length || aim < 0) {
    return -1;
  }
  
  const n = arr.length;
  const max = Infinity;
  
  const dp = []; // n * (aim + 1)
  
  // 对第一种货币初始化
  for (let j = 1; j <= aim; j++) {
    dp[0][j] = max;
    if (j - arr[0] >= 0 && dp[0][j - arr[0]] !== max) {
      dp[0][j] = (dp[0][j - arr[0]] || 0) + 1;
    }
  }
  
  let left = 0;
  
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= aim; j++) {
      left = max;
  
      if (j - arr[i] >= 0 && dp[i][j- arr[i]] !== max) {
        left = dp[i][j - arr[i]] + 1;
      }
    
      dp[i][j] = Math.min(left, dp[i - 1][j]);
    }
  }
  
  return dp[n - 1][aim] !== max ? dp[n - 1][aim] : -1;
};

// 空间压缩参考矩阵的最小路径和
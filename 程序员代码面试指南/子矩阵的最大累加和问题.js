/**
 * 给定一个矩阵matrix，其中的值有正、有负、有0，返回矩阵的最大累加和。
 * 例如，矩阵matrix为：
 * -90 48 78
 * 64 -40 64
 * -81 -7 66
 * 其中，最大累加和的矩阵为：
 * 48 78
 * -40 64
 * -7 66
 * 所以返回累加和209。
 * 例如， matrix为：
 * -1 -1 -1
 * -1 2 2
 * -1 -1 -1
 * 其中，最大累计和的子矩阵为:
 * 2 2
 * 所以返回累加和4。
 */

const maxSum = () => {
  if (!m || !m.length || !m[0].length) {
    return 0;
  }
  
  let max = Infinity;
  
  let cur = 0;
  
  let s = null;
  
  for (let i = 0; i < m.length; i++) {
    s = new Array(m[0].length);
    
    for (let j = i; j < m.length; j++) {
      cur = 0;
      
      for (let k = 0; k != s.length; k++) {
        // 每列的和
        s[k] += m[j][k];
        cur += s[k];
        
        max = Math.max(max, cur);
        cur = cur < 0 ? 0 : cur;
      }
    }
  }
  
  return max;
};
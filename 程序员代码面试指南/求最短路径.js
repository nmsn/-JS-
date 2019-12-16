/**
 * 用一个整型矩阵matrix表示一个网格，1代表有路，0代表无路，每一个位置只要不越界，
 * 都有上下左右4个方向，求从最左上角到最右下角的最短通路值。
 * 例如，matrix为：
 * 1 0 1 1 1 
 * 1 0 1 0 1
 * 1 1 1 0 1
 * 0 0 0 0 1
 * 通路只有一条，由12个1构成，所以返回12。
 */

const minPathValue = (m) => {
  if (!m || !m.length || !m[0].length || m[0][0] !== 1 || m[m.length - 1][m[0].length - 1] != 1) {
    return 0;
  }
  
  let map = [];
  
  map[0][0] = 1;
  
  const rQ = [];
  const cQ = [];
  
  rQ.push(0);
  cQ.push(0);
  
  let r = 0;
  let c = 0;
  
  while (!rQ.length) {
    r = rQ.pop();
    c = cQ.pop();
    
    // 到达终点
    if (r === m.length - 1 && c === m[0].length - 1) {
      return map[r][c];
    }
    
    walkTo(map[r][c], r - 1, c, m, map, rQ, cQ); // 上
    walkTo(map[r][c], r + 1, c, m, map, rQ, cQ); // 下
    walkTo(map[r][c], r, c - 1, m, map, rQ, cQ); // 左
    walkTo(map[r][c], r, c + 1, m, map, rQ, cQ); // 右
  }
  
  // 无完整路径
  return 0;
};


const walkTo = (pre, toR, toC, m, map, rQ, cQ) => {
  if (
    toR < 0
    || toR === m.length
    || toC < 0
    || toC === m[0].length

    // 该节点可走
    || m[toR][toC] !== 1
    // 当前点走过
    || map[toR][toC] !== 0
  ) {
    return ;
  }
  
  // 从(0,0)走到(i,j)位置最短的路径值
  map[toR][toC] = pre + 1;
  
  // 以当前节点为基准进行下一次前进
  rQ.push(toR);
  cQ.push(toC);
};

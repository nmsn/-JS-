/** 
 * 1.给定整数N，返回斐波那契数列的第N项
 * 2.给定整数N，代表台阶数，依次可以跨2个或者1个台阶，返回有多少中走法
 * 3.假设农场中程树的母牛每年只会生一头小母牛，并且永远不会死。
 *   第一年农场有1只成熟的母牛，从第二年开始，母牛开始生小母牛。每只小母牛3年之后成熟又可以生小母牛。
 *   给定整数N，求出N年后牛的数量。
 */

// 1.斐波那契数列

// O(2^N)
const f1 = (n) => {
  if (n < 1) {
    return 0;
  }
  
  if (n === 1 || n ===2) {
    return 1;
  }
  
  return f1(n - 1) + fl(n - 2);
};

// O(N)

const f2 = (n) => {
  if (n < 1) {
    return 0;
  }
  
  if (n === 1 || n ===2) {
    return 1;
  }
  
  let res = 1;
  let pre = 1;
  let tmp = 0;
  
  for (let i = 3; i <= n; i++) {
    tmp = res;
    res = res + pre;
    pre = tmp;
  }
  return res;
};

// O(logN), 利用矩阵方法求解

// 2.走台阶问题

// O(2^N)

const s1 = (n) => {
  if (n < 1) {
    return 0;
  }
  
  if (n ===1 || n ===2) {
    return n;
  }
  
  return s1(n - 1) + s1(n -2);
};

// O(N)

const s2 = (n) => {
  if (n < 1) {
    return 0;
  }
  
  if (n === 1 || n === 2) {
    return n;
  }
  
  let res = 2;
  let pre = 1;
  let tmp = 0;
  
  for (let i = 3; i <= n; i++) {
    tmp = res;
    res = res + pre;
    pre = tmp;
  }
  return res;
};

// O(logN), 利用矩阵方法求解

// 3.农场

const c1 = (n) => {
  if (n < 1) {
    return 0;
  }
  
  if (n === 1 || n === 2 || n ===3) {
    return n;
  }
  
  return c1(n - 1) + c1(n - 3);
};

const c2 = (n) => {
  if (n < 1) {
    return 0;
  }
  
  if (n === 1 || n === 2 || n === 3) {
    return n;
  }
  
  let res = 3;
  let pre = 2;
  let prepre = 1;
  let tmp1 = 0;
  let tmp2 = 0;
  
  for (let i = 4; i <= n; i++) {
    tmp1 = res;
    tmp2 = pre;
    res = res + prepre;
    pre = tmp1;
    prepre = tmp2;
  }
  return res;
};

// O(logN), 利用矩阵方法求解
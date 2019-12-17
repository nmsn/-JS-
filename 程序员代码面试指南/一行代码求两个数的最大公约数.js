/**
 * 给定两个不等于0的整数M和N，求M和N的最大公约数
 */

// 辗转相除法

const gcd = (m, n) => {
  return n === 0 ? m : gcd(n, m % n);
};
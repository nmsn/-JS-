/** 
 * 给定一个整数n，返回从1到n的数字中1出现的个数。
 */

const solution1 = (num) => {
  if (num < 1) {
    return 0;
  }
  
  let count = 0;
  
  for (let i = 1; i <= num; i++) {
    count += getNum(i);
  }
};

const getNum = (num) => {
  let res = 0;
  
  while (num !== 0) {
    if (num % 10 === 1) {
      res++;
    }
    
    num = parseInt(num / 10);
  }
  
  return res;
};

// 进阶

const solution2 = (num) => {
  if (num < 1) {
    return 0;
  }
  
  let len = getLenOfNum(num);
  
  if (len === 1) {
    return 1;
  }
  
  let tmp1 = powerBaseOf10(len - 1);
  let first = num / tmp1;
  let firstOneNum = first === 1 ? num % tmp1 + 1 : tmp1;
  let otherOneNum = first * (len - 1) * (tmp1 / 10);
  
  return firstOneNum + otherOneNum + solution2(num % tmp1);
};

const getLenOfNum = (num) => {
  
  let len = 0;
  
  while (num !== 0) {
    len++;
    num = parseInt(num / 10);
  }
  
  return len;
};

powerBaseOf10 = (base) => {
  return Math.pow(10, base);
};
/**
 * 蓄水池算法
 */

const rand = (max) => {
  return parseInt(Math.random() * max) + 1;
};

const getKNumsRand = (k, max) => {
  if (max < 1 || k < 1) {
    return null;
  }
  
  let res = Array(Math.min(k, max));
  
  for (let i = 0; i < res.length; i++) {
    res[i] = i + 1;
  }
  
  for (let i = k + 1; i < max + 1; i++) {
    if (rand(i) <= k) {
      res[rand(k) - 1] = i;
    }
  }
  
  return res;
};
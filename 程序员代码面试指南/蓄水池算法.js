/**
 * 蓄水池算法
 * 
 * 1.处理1~k号球时，直接放近袋子里
 * 2.处理第i号球是(i>k)，以k/i的概率决定是否将第i号球放进袋子。
 * 如果不决定将第i号球放进袋子，直接扔掉第i号球。
 * 如果决定将第i号球放进袋子，那么就从袋子里的k个球中随机扔掉一个，然后把第i号球放入袋子 
 */

const rand = (max) => {
  return parseInt(Math.random() * max) + 1;
};

const getKNumsRand = (k, max) => {
  if (max < 1 || k < 1) {
    return null;
  }
  
  let res = Array(Math.min(k, max));
  
  // 前k个数直接进入袋子
  for (let i = 0; i < res.length; i++) {
    res[i] = i + 1;
  }
  
  for (let i = k + 1; i < max + 1; i++) {
    if (rand(i) <= k) { // 决定i进不进袋子
      res[rand(k) - 1] = i; // i随机替换掉袋子中的一个
    }
  }
  
  return res;
};
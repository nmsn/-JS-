/**
 * 给定一个等概率产生1~5的随机函数randTo5
 * 除此之外，不能使用任何额外的随机机制，请用randTo5实现等概率随机产生1~7的随机函数rand1To7
 */

const rand1To5 = () => {
  return parseInt(Math.random() * 5 + 1);
};

const rand1To7 = () => {
  let num = 0;
  
  do {
    /**
     * 此处为两次独立调用rand1To5，不能化简
     * (rand1To5() - 1) * 5 随机产生 0,5,10,15,20
     * 利用rand1To5() - 1 随机产生 0,1,2,3,4 进行补充插空
     */
    num = (rand1To5() - 1) * 5 + rand1To5() - 1;
  } while (num > 20);
  
  return num % 7 + 1;
};



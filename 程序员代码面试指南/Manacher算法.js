/** 
 * 给定一个字符串str，返回str中最长回文子串的长度
 * str='123'，其中的最长回文子串为'1','2','3'，所以返回1
 * str='abc1234321'，其中的最长回文子串为'1234321'，所以返回7。
 */

const manacherString = (str) => {
  const charArr = str.spilt('');
  const res = Array(str.length * 2 + 1);
  let index = 0;
  
  for (let i = 0; i != res.length; i++) {
    res[i] = (i & 1) === 0 ? '#' : charArr[index++];
  }
  
  return res;
};

const maxLcpsLength = (str) => {
  if (!str || !str.length) {
    return 0;
  }
  
  const charArr = manacherString(str);

  // 回文半径数组
  const pArr = Array(charArr.length);

  // 回文中心的位置
  let index = -1;
  
  // 回文半径最右的位置
  let pR = -1;
  
  let max = -Infinity;
  
  for (let i = 0; i < charArr.length; i++) {
    // pArr[i] 初始化
    pArr[i] = pR > i
      ? Math.min(pArr[2 * index - 1], pR - 1)
      : 1;

    while (
      i + pArr[i] < charArr.length // 回文长度 < 数组长度
      && i - pArr[i] > -1
    ) {
      if (
        charArr[i + pArr[i]] === charArr[i - pArr[i]] // 回文对应位置相等
      ) {
        pArr[i]++;
      } else {
        break;
      }
    }
    
    if (i + pArr[i] > pR) { // 更新pR index
      pR = i + pArr[i];
      index = i;
    }
    
    max = Math.max(max, pArr[i]);
  }
  
  return max - 1;
};
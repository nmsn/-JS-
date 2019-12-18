/**
 * 给定两个字符串str和match，长度分别为N和M。实现一个算法，如果字符串str中含有子串match，则返回match在str中的开始位置，不含有则返回-1。
 */

const getIndexOf = (s, m) => {
  if (!s || !m || m.length < 1 || s.length < 1 || s.length < m.length) {
    return -1;
  }
  
  let ss = s.split('');
  let ms = m.split('');
  
  let si = 0;
  let mi = 0;
  
  let next = getNextArray(ms);
  
  while (si < ss.length && mi < ms.length) {
    if (ss[si] === ms[mi]) {
      si++;
      mi++;
    } else if (next[mi] === -1) {
      si++;
    } else {
      mi = next[mi];
    }
  }
  
  return mi === ms.length ? si - mi : -1;
};

const getNextArray = (ms) => {
  if (ms.length === 1) {
    return [];
  }
  
  let next = Array(ms.length);
  
  next[0] = -1;
  next[1] = 0;
  let pos = 2;
  let cn = 0;
  
  while (pos < next.length) {
    if (ms[pos - 1] === ms[cn]) {
      next[pos++] = ++ cn;
    } else if (cn > 0) {
      cn = next[cn];
    } else {
      next[pos++] = 0;
    }
  }
  
  return next;
};
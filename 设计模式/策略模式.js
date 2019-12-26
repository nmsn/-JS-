/**
 * 策略模式：
 * 将定义的一组算法封装起来，使其相互之间可以替换。
 * 封装的算法具有一定的独立性，不会随客户端变化而变化。
 */

var obj = {
  A: function(salary) {
    return salary * 4;
  },
  B: function(salary) {
    return salary * 3;
  },
  C: function(salary) {
    return salary * 2;
  },
};
var calculateBouns = function(level, salary) {
  return obj[level](salary);
};

console.log(calculateBouns("A", 10000));

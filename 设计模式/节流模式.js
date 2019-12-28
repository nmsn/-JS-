/**
 * 节流模式：
 * 对重复的业务逻辑进行节流控制，执行最后一次操作并取消其他操作，以提高性能。
 */

/**
 * 函数节流方法
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @param Number atleast 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */

var throttle = function(fn, delay, atleast) {
  var timer = null;
  var previous = null;

  return function() {
    var now = +new Date();

    if (!previous) previous = now;

    if (now - previous > atleast) {
      fn();
      // 重置上一次开始时间为本次结束时间
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn();
      }, delay);
    }
  };
};

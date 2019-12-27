/**
 * 备忘录模式：
 * 在不破坏对象的封装性的前提下，
 * 在对象之外捕获并保存该对象内部的状态该以便日后对象使用或者对象恢复到以前的某个状态。
 */

var Page = (function() {
  var cache = {};

  return function(page, fn) {
    // 判断缓存是否存在，如果存在直接使用缓存数据
    if (cache[page]) {
      showPage(page, cache[page]);
      fn && fn();
    } else {
      // 不存在缓存
      $.post(
        "./getData",
        {
          page,
        },
        function(res) {
          if (res.errNo === 0) {
            showPage(page, res.data);

            // 保存数据到缓存
            cache[page] = res.data;
            fn && fn();
          } else {
            // 处理异常
          }
        },
      );
    }
  };
})();

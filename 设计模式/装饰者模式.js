/**
 * 装饰者模式：
 * 在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户的复杂需求。
 */

var decorator = function(input, fn) {
  var input = document.getElementById(input);
  // 若事件源已经绑定事件
  if (typeof input.onclick === 'function') {
    // 缓存事件源原有回调函数
    var oldClickFn = input.onclick;
    
    // 为事件源定义新的事件
    input.onclick = function() {
      // 事件源原有回调函数
      oldClickFn();
      // 执行事件源新增回调函数
      fn();
    }
  } else {
    // 事件源未绑定事件，直接未事件源添加新增回调函数
    inpput.onclick = fn;
  }
} 
/**
 * 外观模式：
 * 为一组复杂地子系统接口提供一个更高级地统一接口，通过这个接口使得堆子系统接口地访问更容易。
 * 在JavaScript中有时也会用于对底层结构兼容性做统一封装来简化用户使用。
 */

function addEvent(dom, type, fn) {
  // 对于支持DOM2级时间处理程序addEventListener方法的浏览器
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  
  // 对于不支持addEventListener方法但支持attachEvent方法的浏览器
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  
  // 对于不支持addEventListener方法也不支持attachEvent方法，但支持on+'事件名'的浏览器
  } else {
    dom['on' + type] = fn;
  }
}
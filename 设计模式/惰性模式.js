/**
 * 惰性模式：
 * 减少每次代码执行时的重复性的分支判断，通过对对象重定义来屏蔽原对象中的分支判断。
 */

var AddEvent = function(dom, type, fn) {
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent("on" + type, fn);
  } else {
    dom["on" + type] = fn;
  }
};

// 1
var AddEvent = (function(dom, type, fn) {
  if (dom.addEventListener) {
    return function(dom, type, fn) {
      dom.addEventListener(type, fn, false);
    };
  } else if (dom.attachEvent) {
    return function(dom, type, fn) {
      dom.attachEvent("on" + type, fn);
    };
  } else {
    return function(dom, type, fn) {
      dom["on" + type] = fn;
    };
  }
})();

// 2
var AddEvent = function(dom, type, fn) {
  if (dom.addEventListener) {
    AddEvent = function(dom, type, fn) {
      dom.addEventListener(type, fn, false);
    };
  } else if (dom.attachEvent) {
    AddEvent = function(dom, type, fn) {
      dom.attachEvent("on" + type, fn);
    };
  } else {
    AddEvent = function(dom, type, fn) {
      dom["on" + type] = fn;
    };
  }
  AddEvent(dom, type, fn);
};

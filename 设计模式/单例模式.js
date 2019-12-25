/**
 * 单例模式：
 * 又被称为单体模式，是只允许实例化一次的对象类。有时我们也用一个对象来规划一个命名空间，并井井有条地管理对象上地属性和方法。
 */

var Ming = {
  g: function(id) {
    return document.getElementById(id);
  },
  css: function(id, key, value) {
    this.g(id).style[key] = value;
  }
};
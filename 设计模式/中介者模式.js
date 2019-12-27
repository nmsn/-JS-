/**
 * 中介者模式：
 * 通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合。
 * 有时中介者对象也可改变对象之间的交互。
 */

// 和观察者区别：出发点不一样，实现可以相同

// 创建中介者
var Mediator = (function() {
  var _msg = {};
  return {
    register: function(type, action) {
      if (!_msg[type]) _msg[type] = [];
      _msg[type].push(action);
    },
    send: function(type) {
      if (_msg[type]) {
        for (var i = 0; i < _msg[type].length; i++) {
          _msg[type][i] && _msg[type][i]();
        }
      }
    },
  };
})();

Mediator.register("demo", function() {
  console.log("first");
});
Mediator.register("demo", function() {
  console.log("second");
});
Mediator.send("demo");

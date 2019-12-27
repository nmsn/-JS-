/**
 * 访问者模式：
 * 针对于对象结构中的问题，定义在不改变该对象的前提下访问结构中元素的新方法。
 */

// 访问者
function Visitor() {
  this.visit = function(concreteElement) {
    concreteElement.doSomething();
  };
}

// 元素类
function ConceteElement() {
  this.doSomething = function() {
    console.log("这是一个具体元素");
  };
  this.accept = function(visitor) {
    visitor.visit(this);
  };
}

// Client
var ele = new ConceteElement();
var v = new Visitor();
ele.accept(v);

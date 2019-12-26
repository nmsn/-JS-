/**
 * 模板方法模式：
 * 父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时可重新定义算法中某些实现步骤。
 */

var Beverage = function() {};
Beverage.prototype.boilWater = function() {
  console.log("煮沸水");
};

// 空方法，应该由子类重写
Beverage.prototype.brew = function() {
  throw new Error("子类必须重写 brew 方法");
}; 
// 空方法，应该由子类重写
Beverage.prototype.pourInCup = function() {
  throw new Error("子类必须重写 pourInCup 方法");
}; 
// 空方法，应该由子类重写
Beverage.prototype.addCondiments = function() {
  throw new Error("子类必须重写 addCondiments 方法");
}; 

// 父类的模板方法
Beverage.prototype.init = function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};

var Coffee = function() {};
Coffee.prototype = new Beverage();
Coffee.prototype.brew = function() {
  console.log("用沸水冲泡咖啡");
};
Coffee.prototype.pourInCup = function() {
  console.log("把咖啡倒进杯子");
};
Coffee.prototype.addCondiments = function() {
  console.log("加糖和牛奶");
};

// 当调用init方法时，会找到父类的init方法进行调用。
var coffee = new Coffee();
coffee.init();

var Tea = function() {};
Tea.prototype = new Beverage();
Tea.prototype.brew = function() {
  console.log("用沸水浸泡茶叶");
};
Tea.prototype.pourInCup = function() {
  console.log("把茶倒进杯子");
};
Tea.prototype.addCondiments = function() {
  console.log("加柠檬");
};

var tea = new Tea();
tea.init();

/**
 * 作者：zhaoyezi
 * 链接：https://juejin.im/post/5b110513f265da6e1b553cf0
 * 来源：掘金
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

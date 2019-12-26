/**
 * 组合模式
 * 又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构。
 * 组合模式使得用户对单个对象和组合对象的使用具有一致性。
 */

// 子对象
function FlightOrder() {}
FlightOrder.prototyp.create = function() {
  console.log("flight order created");
};

function HotelOrder() {}
HotelOrder.prototype.create = function() {
  console.log("hotel order created");
};

// 组合对象
function TotalOrders() {
  this.orderList = [];
}

TotalOrders.prototype.addOrder = function(order) {
  this.orderList.push(order);
};

TotalOrders.prototype.create = function(order) {
  for (var i = 0, length = this.orderList.length; i < length; i++) {
    this.orderList[i].create();
  }
};

// 单一创建
var flight = new FlightOrder();
flight.create();

// 组合创建
var orders = new TotalOrders();
orders.addOrder(new FlightOrder());
orders.addOrder(new HotelOrder());
orders.create();

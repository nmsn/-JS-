/**
 * 桥接模式：
 * 在系统沿着多个维度变化的同时，又不增加其复杂度并已达到解耦。
 */

function Speed(x, y) {
  this.x = x;
  this.y = y;
}

Speed.prototype.run = function() {
  console.log('运动起来');
}

function Color(cl) {
  this.color = cl;
}

Color.prototype.draw = function() {
  console.log('绘制颜色');
}

function Speek(wd) {
  this.word = wd;
}

Speek.prototype.say = function() {
  console.log('书写字体');
}

function Ball(x, y, c) {
  this.speed = new Speed(x, y);
  this.color = new Color(c);
}

Ball.prototype.init = function() {
  this.speed.run();
  this.color.draw();
}

function People(x, y, f) {
  this.speed = new Speed(x, y);
  this.font = new Speek(f);
}

People.prototype.init = function() {
  this.speed.run();
  this.font.say();
}
/**
 * 享元模式：
 * 运用共享技术有效地支持大量地细粒度的对象，避免对象间拥有相同内容造成多余的开销。
 */

var Model = function(sex, underwear) {
  this.sex = sex;
  this.underwear = underwear;
};

Model.prototype.takePhoto = function() {
  console.log("sex: " + this.sex + "underwear: " + this.underwear);
};

for (var i = 0; i < 50; i++) {
  var maleModel = new Model("male", "underwear" + i);
  maleMode.takePhoto();
}

for (var j = 0; j < 50; i++) {
  var femaleModel = new Model("male", "underwear" + j);
  femaleMode.takePhoto();
}

// 改进后

var Model = function(sex) {
  this.sex = sex;
};

Model.prototype.takePhoto = function() {
  console.log("sex: " + this.sex + "underwear: " + this.underwear);
};

var maleModel = new Model("male");
var femaleModel = new Model("female");

for (var i = 1; i <= 50; i++) {
  maleModel.underwear = "underwear" + i;
  maleModel.takePhoto();
}

for (var j = 1; j <= 50; j++) {
  femaleModel.underwear = "underwear" + j;
  femaleModel.takePhoto();
}

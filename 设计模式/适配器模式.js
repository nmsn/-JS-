/**
 * 适配器模式：
 * 将一个类（对象）的接口（方法或者属性）转化成另外一个接口以满足用户需求，使类（对象）之间接口的不兼容问题通过适配器得以解决。
 */

// JQuery适配器

window.A = A = JQuery;

// 参数适配器

function doSomeThing() {
  var _adaper = {
    name: 'nmsn',
    title: '设计模式',
    age: 24,
    color: 'pink',
    size: 100,
    prize: 50,
  };
  
  for (var i in _adaper) {
    _adaper[i] = obj[i] || _adaper[i];
  }
}

// 数据适配

var obj = {
  name: '',
  type: '',
  title: '',
  time: '',
}

function arrToObjAdapter(arr) {
  return {
    name: arr[0],
    type: arr[1],
    title: arr[2],
    data: type[3],
  }
}
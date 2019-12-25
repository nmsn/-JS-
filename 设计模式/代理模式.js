/**
 * 代理模式：
 * 由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介的作用。
 */

 // 定义一个鞋子类
var Shoes = function(name){
	this.name = name;
};

Shoes.prototype.getName = function() {
	return this.name;
};

// 定义一个助理对象
 
var assistant = {
	buyShoes: function(shoes) {
		star.buyShoes(shoes.getName())
	}
};

// 定义一个明星对象
var star = {
	buyShoes: function(name) {
		console.log('买到了一双' + name);
	}

};

assistant.buyShoes(new Shoes('高跟鞋')); // "买到了一双高跟鞋"

// 定义一个鞋子类
var Shoes = function(name){
	this.name = name;
};

Shoes.prototype.getName = function() {
	return this.name;
};

// 定义一个助理对象
 
var assistant = {
	buyShoes: function(shoes) {
		star.buyShoes(shoes.getName())
	}
};

// 定义一个明星对象
var star = {
	buyShoes: function(name) {
		console.log('买到了一双' + name);
	}

};

assistant.buyShoes(new Shoes('高跟鞋')); // "买到了一双高跟鞋"

/**
 * 作者：源自世界
 * 链接：https://juejin.im/post/5a68491cf265da3e5661b342
 * 来源：掘金
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */



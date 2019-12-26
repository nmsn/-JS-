/**
 * 状态模式：
 * 当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象。
 */

class Contra {
  constructor () {
    //存储当前待执行的动作 们
    this._currentstate = {};
  }
  //添加动作
  changeState (){
    //清空当前的动作集合
    this._currentstate = {};
    //遍历添加动作
    Object.keys(arguments).forEach(
      (i) => this._currentstate[arguments[i]] = true
    )
    return this;
  }
  //执行动作
  contraGo (){
    //当前动作集合中的动作依次执行
    Object.keys(this._currentstate).forEach(
      (k) => Actions[k] && Actions[k].apply(this)
    )
    return this;
  }
};

const Actions = {
  up : function(){
    //向上跳
    console.log('up');
  },
  down : function(){
    //趴下
    console.log('down');
  },
  forward : function(){
    //向前跑
    console.log('forward');
  },
  backward : function(){
    //往老家跑
    console.log('backward');
  },
  shoot : function(){
    //开枪吧
    console.log('shoot');
  },
};
var littlered = new Contra();
littlered.changeState('shoot','up').contraGo();
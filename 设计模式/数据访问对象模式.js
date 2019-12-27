/**
 * 数据访问对象模式(Data access object DAO)：
 * 抽象和封装对数据源的访问和存储，DAO通过对数据源链接的管理方便对数据的访问和存储。
 */

/**
 * LocalStorage数据访问类
 * @param {string} prefix Key前缀
 * @param {string} timeSplit 时间戳与存储数据之间的分割符
 */
var Dao = function(prefix, timeSplit) {
  this.prefix = prefix;
  this.timeSplit = timeSplit || "|-|";
};
// LocalStorage数据访问类原型方法
Dao.prototype = {
  // 操作状态
  status: {
    SUCCESS: 0, // 成功
    FAILURE: 1, // 失败
    OVERFLOW: 2, // 溢出
    TIMEOUT: 3, // 过期
  },
  // 本地存储对象
  storage: localStorage || window.localStorage,
  // 获取带前缀的真实键值
  getKey: function(key) {
    return this.prefix + key;
  },
  // 添加（修改）数据
  set: function(key, value, callback, time) {
    // 默认为成功状态
    var status = this.status.SUCCESS,
      key = this.getKey(key);
    try {
      // 获取过期时间戳
      time = new Date(time).getTime() || time.getTime();
    } catch (e) {
      // 未设置过期时间时默认为一个月
      time = new Date().getTime() + 1000 * 60 * 60 * 24 * 30;
    }
    try {
      // 向本地存储中添加（修改）数据
      this.storage.setItem(key, time + this.timeSplit + value);
    } catch (e) {
      // 发生溢出
      status = this.status.OVERFLOW;
    }
    // 执行回调并传入参数
    callback && callback.call(this, status, key, value);
  },
  // 获取数据
  get: function(key, callback) {
    var key = this.getKey(key),
      status = this.status.SUCCESS, // 获取数据状态
      value = null; // 获取数据值

    try {
      // 从本地存储获取数据
      value = this.storage.getItem(key);
    } catch (e) {
      // 获取数据失败
      status = this.status.FAILURE;
      value = null;
    }

    // 如果成功获取数据
    if (status !== this.status.FAILURE) {
      var index = value.indexOf(this.timeSplit),
        timeSplitLen = this.timeSplit.length,
        // 获取时间戳
        time = value.slice(0, index);
      // 判断数据是否未过期
      if (new Date(1 * time).getTime() > new Date().getTime() || time == 0) {
        // 获取数据值
        value = value.slice(index + timeSplitLen);
      } else {
        // 数据已过期，删除数据
        value = null;
        status = this.status.TIMEOUT;
        this.remove(key);
      }
    }

    // 执行回调
    callback && callback.call(this, status, value);
    // 返回结果值
    return value;
  },
  // 删除数据
  remove: function(key, callback) {
    // 设置默认状态为失败
    var status = this.status.FAILURE,
      key = this.getKey(key),
      value = null;
    try {
      // 获取数据值
      value = this.storage.getItem(key);
    } catch (e) {
      // 数据不存在，不采取操作
    }
    // 如果数据存在
    if (value) {
      try {
        // 删除数据
        this.storage.removeItem(key);
        status = this.status.SUCCESS;
      } catch (e) {
        // 数据删除失败，不采取操作
      }
    }
    // 执行回调并传入参数，删除成功则传入被删除的数据值
    callback &&
      callback.call(
        this,
        status,
        status > 0
          ? null
          : value.slice(value.indexOf(this.timeSplit) + this.timeSplit.length),
      );
  },
};

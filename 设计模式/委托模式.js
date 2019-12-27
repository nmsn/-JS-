/**
 * 委托模式：
 * 多个对象接收并处理同一请求，他们将请求委托给另一个对象统一处理请求。
 */

// 给父层元素绑定事件
document.getElementById("list").addEventListener("click", function(e) {
  // 兼容性处理
  var event = e || window.event;
  var target = event.target || event.srcElement;
  // 判断是否匹配目标元素
  if (target.nodeName.toLocaleLowerCase === "li") {
    console.log("the content is: ", target.innerHTML);
  }
});

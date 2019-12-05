
/**
 *  一个栈依次压入12345，
 *  那么从栈顶到栈底分别为54321。
 *  将这个栈转置后，
 *  从栈顶到栈底为12345，
 *  也就是实现栈中元素的逆序，
 *  但是只能用递归函数来实现，
 *  不能用其他数据结构。
 */

const stack = [5,4,3,2,1];

const getAndRemoveLastElement = (stack) => {
  const result = stack.pop();
  if (!stack.length) {
    return result;
  } else {
    const last = getAndRemoveLastElement(stack);
    stack.push(result);
    return last;
  }
}

const reverse = (stack) => {
  if(!stack.length) {
    return ;
  }
  
  const i = getAndRemoveLastElement(stack);
  reverse(stack);
  stack.push(i);
}

console.log(stack);
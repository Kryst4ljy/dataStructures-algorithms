/**
 * 栈
 * 栈是一种类似于列表的数据结构，栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶（类比于一摞盘子）
 * 原以为栈的弹出是直接删除栈顶的元素，原来是将数组的指针向下挪一位，并不是直接删除栈顶元素
 */

/**
 * @name 栈
 * @property {number} top 栈顶的位置
 * @function push 往栈顶添加元素
 * @function pop 弹出栈顶的元素
 * @function peek 返回当前栈顶的元素
 * @function clear 清除栈中的所有元素
 */
function Stack() {
  this.dataStore = []; // 用数组存储一个栈数据
  this.top = 0;
}


/**
 * @name push
 * @param {any} element
 * 往栈顶添加元素
 */
Stack.prototype.push = function (element) {
  this.dataStore[this.top++] = element;
}
/**
 * @name pop
 * 弹出栈顶的元素
 */
Stack.prototype.pop = function () {
  return this.dataStore[--this.top];
}
/**
 * @name peek
 * 返回当前栈顶的元素
 */
Stack.prototype.peek = function () {
  return this.dataStore[this.top - 1];
}
/**
 * @name clear
 * 清除栈中的所有元素
 */
Stack.prototype.clear = function () {
  this.top = 0;
}
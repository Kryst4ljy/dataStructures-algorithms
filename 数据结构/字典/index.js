/**
 * 字典
 * 字典是一种以键 - 值对形式存储数据的数据结构，就像电话号码簿里的名字和电话号码一样。
 * Dictionary 类的基础是 Array 类，而不是 Object 类。
 */

/**
 * @name Dictionary
 * @function add 向字典中添加元素
 * @function find 查找字典中的元素
 * @function remove 删除字典中的元素
 * @function showAll 显示字典中的所有元素
 * @function count 显示字典中元素的个数
 * @function clear 删除字典中的所有元素
 * 字典
 */
function Dictionary() {
  this.dataStore = new Array();
}
/**
 * @name add
 * @param {string} key 字典的键名
 * @param {element} value 字典的值
 * 向字典中添加元素
 */
Dictionary.prototype.add = function (key, value) {
  this.dataStore[key] = value;
};
/**
 * @name find
 * @param {string} key 字典的键名
 * 查找字典中的元素
 */
Dictionary.prototype.find = function (key) {
  return this.dataStore[key];
};
/**
 * @name remove
 * @param {string} key 字典的键名
 * 删除字典中的元素
 */
Dictionary.prototype.remove = function (key) {
  delete this.dataStore[key];
};
/**
 * @name showAll
 * 显示字典中的所有元素
 */
Dictionary.prototype.showAll = function () {
  for (let key in this.dataStore) {
    console.log(`${key} -> ${this.dataStore[key]}`);
  }
};
/**
 * @name count
 * 显示字典中元素的个数
 */
Dictionary.prototype.count = function () {
  let n = 0;
  for (let key in this.dataStore) {
    ++n;
  }
  return n;
};
/**
 * @name clear
 * 删除字典中的所有元素
 */
Dictionary.prototype.clear = function () {
  for (let key in this.dataStore) {
    delete this.dataStore[key];
  }
};

var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());

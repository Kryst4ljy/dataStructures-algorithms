/**
 * 散列
 * 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。
 * 散列使用的数据 结构叫做散列表。
 * 散列基于数组实现，通过哈希算法（散列函数）得到一个数组下标，在对应数组下标位置插入元素。
 * 哈希算法基本无法满足一个值对应唯一一个散列值，所以可以通过在链表数组存储元素(开链法:此例用的是二维数组)。
 * 使用散列表存储数据时，通过一个散列函数将键映射为一个数 字，这个数字的范围是 0 到散列表的长度。
 */

/**
 * @name HashTable
 * @function simpleHash 哈希算法，把值通过哈希算法换算成数组下标
 * @function showDistro 显示散列表中的所有元素
 * @function put 往散列表中插入元素
 * @function get 从散列中获取元素
 */
function HashTable() {
  this.table = new Array(137);
}
/**
 * @name simpleHash
 * @param {Element} key 要插入散列的元素
 * @returns {index} 返回处理后的散列下标（碰撞情况可能会重复）
 * 哈希算法，把值通过哈希算法换算成数组下标
 * 简单散列函数-将字符串中每个字符的 ASCII 码值相加
 */
HashTable.prototype.simpleHash = function (key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % this.table.length;
};
/**
 * @name betterHash
 * @param {Element} key 要插入散列的元素
 * @returns {index} 返回处理后的散列下标（碰撞情况可能会重复）
 * 哈希算法，把值通过哈希算法换算成数组下标
 * 更好的哈希算法，减少碰撞情况
 */
HashTable.prototype.betterHash = function (key) {
  const H = 31;
  var total = 0;
  for (var i = 0; i < key.length; ++i) {
    total += H * total + key.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
};
/**
 * @name put
 * @param {Element} key 要插入散列的元素
 * 往散列表中插入元素
 */
HashTable.prototype.put = function (key) {
  const index = this.betterHash(key);
  if (this.table[index] === undefined) {
    this.table[index] = [key];
    return;
  }
  this.table[index].push(key);
};
/**
 * @name get
 * @param {Element} key 要查找的元素
 * 从散列中获取元素
 */
HashTable.prototype.get = function (key) {
  const index = this.betterHash(key);
  for (let i = 0; i < this.table[index].length; i++) {
    return this.table[index][i] === key ? this.table[index][i] : "";
  }
};
/**
 * @name showDistro
 * 显示散列表中的所有元素
 */
HashTable.prototype.showDistro = function (key) {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(`${i} -> ${this.table[i]}`);
    }
  }
};

var someNames = [
  "David",
  "Davdi",
  "Davdi",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();

/**
 * 集合
 * 集合（set）是一种包含不同元素的数据结构。集合中的元素称为成员。
 * 集合的两个最重 要特性是：首先，集合中的成员是无序的；其次，集合中不允许相同成员存在。
 */

/**
 * @name SetMine
 * @function add 往集合中添加元素
 * @function remove 删除集合中的元素
 * @function show 显示集合中的所有元素
 * @function size 获取集合的大小
 * @function contains 判断集合中是否存在某个元素
 * @function union 执行并集操作，将两个集合合并成一个
 * @function intersect 求两个集合的交集
 * @function subset 判断一个集合是否是另一个集合的子集
 * @function difference 该方法返回一个新集合，该集合包含的是那些属于第一个集合但不属于第二个集合的成员。
 */
function SetMine() {
  this.dataStore = [];
}
/**
 * @name add
 * @param {any} element 要添加的元素
 * 往集合中添加元素
 */
SetMine.prototype.add = function (element) {
  if (this.dataStore.indexOf(element) === -1) {
    this.dataStore.push(element);
    return true;
  } else {
    return false;
  }
};
/**
 * @name remove
 * @param {any} element 要删除的元素
 * 删除集合中的元素
 */
SetMine.prototype.remove = function (element) {
  const pos = this.dataStore.indexOf(element);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
};
/**
 * @name show
 * 显示集合中的所有元素
 */
SetMine.prototype.show = function () {
  return this.dataStore;
};
/**
 * @name contains
 * @param {any} element 要查找的元素
 * 判断集合中是否存在某个元素
 */
SetMine.prototype.contains = function (element) {
  const pos = this.dataStore.indexOf(element);
  if (pos > -1) {
    return true;
  } else {
    return false;
  }
};
/**
 * @name union
 * @param {SetMine} set 要做并集的集合
 * 执行并集操作，将两个集合合并成一个
 */
SetMine.prototype.union = function (set) {
  const tempSet = new SetMine();
  const containSet = set.show();
  for (let i = 0; i < this.dataStore.length; i++) {
    tempSet.add(this.dataStore[i]);
  }
  for (let j = 0; j < containSet.length; j++) {
    if (!tempSet.contains(containSet[j])) {
      tempSet.add(containSet[j]);
    }
  }
  return tempSet;
};
/**
 * @name intersect
 * @param {SetMine} set 要做交集的集合
 * 求两个集合的交集
 */
SetMine.prototype.intersect = function (set) {
  const tempSet = new SetMine();
  const containSet = set.show();
  for (let i = 0; i < containSet.length; i++) {
    if (this.contains(containSet[i])) {
      tempSet.add(containSet[i]);
    }
  }
  return tempSet;
};
/**
 * @name size
 * 获取集合的大小
 */
SetMine.prototype.size = function () {
  return this.dataStore.length;
};
/**
 * @name subset
 * @param {SetMine} set 要判断的集合
 * 判断一个集合是否是另一个集合的子集
 */
SetMine.prototype.subset = function (set) {
  let flag = true;
  for (let i = 0; i < this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      flag = false;
    }
  }
  return flag;
};
/**
 * @name difference
 * @param {SetMine} set 要判断的集合
 * 该方法返回一个新集合，该集合包含的是那些属于第一个集合但不属于第二个集合的成员。
 */
SetMine.prototype.difference = function (set) {
  const temp = new SetMine();
  for (let i = 0; i < this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      temp.add(this.dataStore[i]);
    }
  }
  return temp;
};

var cis = new SetMine();
var it = new SetMine();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new SetMine();
diff = cis.difference(it);
console.log(
  "[" + cis.show() + "] difference [" + it.show() + "] -> [" + diff.show() + "]"
);

/**
 * 定义：列表是一组有序的数据
 * @JS中列表和数组的区别 个人理解：其他语言中，数组在申明时是需要指定数组的可存储的值的类型以及长度，
 * 列表则不需要指定数组类型以及长度，当列表长度不够时，会生成一个新的二倍于之前的长度的数组，拷贝值进入这个数组，并舍弃旧数组
 * JS中的列表就相当于于数组(相对于其他语言来说)
 */

/**
 * 列表
 * @property {number} listSize 列表的元素个数 ---------done
 * @property {number} pos 列表的当前位置 --------------done
 * @function length 返回列表中的元素的个数 -------------done
 * @function clear 清空列表中的所有元素 ----------------done
 * @function toString 返回列表的字符串形式 -------------done
 * @function getElement 返回当前位置的元素 -------------done
 * @function insert 在现有元素后插入新元素--------------done
 * @function append 在列表的末尾添加新元素 -------------done
 * @function remove 从列表删除元素 --------------------done
 * @function front 将列表的当前位置移动到第一个元素 -----done
 * @function end 将列表的当前位置移动到最后一个元素 -----done
 * @function prev 将当前位置后移一位 -------------------done
 * @function next 将当前位置前移一位 -------------------done
 * @function hasNext 判断后一位 -----------------------done
 * @function hasPrev 判断前一位 -----------------------done
 * @function currPos 返回列表的当前位置 ----------------done
 * @function moveTo 将当前位置移动到指定位置 ------------done
 */
function List() {
  this.dataStore = []; // 列表内部保存元素使用一个数组
  this.listSize = 0;
  this.pos = 0;
}

/**
 * @name append
 * @param {any} element
 * 给列表添加元素
 */
List.prototype.append = function (element) {
  this.dataStore[this.listSize++] = element;
  return this;
}
/**
 * @name remove
 * @param {any} element
 * 删除列表中的元素，依次查找的第一个匹配项
 */
List.prototype.remove = function (element) {
  const removeIndex = this.dataStore.findIndex(n => n === element);
  if (removeIndex !== -1) {
    this.dataStore.splice(removeIndex, 1);
  } else {
    console.error('未找到该列表项');
  }
  return this;
}
/**
 * @name length
 * 返回列表的元素长度
 */
List.prototype.length = function () {
  return this.listSize;
}
/**
 * @name toString
 * 返回列表的元素
 */
List.prototype.toString = function () {
  return this.dataStore.toString();
}
/**
 * @name insert
 * @param {any} element 寻找的元素
 * @param {any} after 要插入的元素
 * 向列表中插入一个元素
 */
List.prototype.insert = function (e, i) {
  const currIndex = this.dataStore.findIndex(n => n === e);
  if (currIndex !== -1) {
    this.dataStore.splice(currIndex + 1, 0, i);
    ++this.listSize;
    return this;
  }
  return this;
}
/**
 * @name clear
 * 清空列表中的所有元素
 */
List.prototype.clear = function () {
  this.dataStore = [];
  this.listSize = 0;
  this.pos = 0; // 写的时候忘了这个
  return this;
}
/**
 * @name getElement
 * 返回列表当前项
 */
List.prototype.getElement = function () {
  return this.dataStore[this.pos];
}
/**
 * @name front
 * 将列表的当前位置移动到第一个元素
 */
List.prototype.front = function () {
  this.pos = 0;
  return this;
}
/**
 * @name end
 * 将列表的当前位置移动到最后一个元素
 */
List.prototype.end = function () {
  this.pos = this.listSize - 1;
  return this;
}
/**
 * @name prev
 * 将当前位置后移一位
 */
List.prototype.prev = function () {
  this.pos++;
  return this;
}
/**
 * @name next
 * 将当前位置前移一位
 */
List.prototype.next = function () {
  this.pos--;
  return this;
}
/**
 * @name hasNext
 * 判断后一位
 */
List.prototype.hasNext = function () {
  return this.pos < this.listSize;
}
/**
 * @name hasPrev
 * 判断前一位
 */
List.prototype.hasPrev = function () {
  return this.pos >= 0;
}
/**
 * @name currPos
 * 返回列表的当前位置
 */
List.prototype.currPos = function () {
  return this.pos;
}
/**
 * @name moveTo
 * @param {number} index
 * 将当前位置移动到指定位置
 */
List.prototype.moveTo = function (index) {
  if (index > this.listSize - 1 || index < 0) {
    console.error('无效位置')
  } else {
    this.pos = index;
  }
  return this;
}




const list = new List();
list.append('hello').append('world').insert('hello', '-');
console.log(list.listSize, list.pos);

// 用法部分
// 使用迭代器访问列表
for (list.front(); list.hasNext(); list.prev()) {
  console.log(list.pos, list.getElement());
}
# 数据结构与算法JS描述

本项目旨在用JavaScript描述各种数据结构，帮助我们更好的理解各类型的数据结构以及如何用JavaScript去实现各种数据结构。

下面列出本项目实现的各个数据结构以及其原型方法，具体实现请看具体代码。

### 队列

队列是一种列表，不同的是列表只能在队尾插入元素，在队首删除元素。

队列用于存储按顺序排列的数据，先进先出。

本文实现的队列以及队列方法：
```
  /**
   * 队列
   * @property {number} length 队列的长度
   * @function enqueue 向队尾添加一个元素
   * @function dequeue 删除队首的元素
   * @function front 读取队首的元素
   * @function back 读取队尾的元素
   * @function clear 清空整个队列
   * @function toString 读取整个队列的元素
   * @function empty 判断队列是否为空
   */
  function Queue() {
    this.dataStore = [];
    this.length = 0;
  }
```

### 二叉树

树是计算机科学中经常用到的一种数据结构。树是一种非线性的数据结构，以分层的方式 存储数据。

二叉树是一种特殊的树，它的子节点个数不超过两个。

二叉查找树是一种 特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。

本文实现的二叉树以及二叉树方法：

```
/**
 * @name 二叉查找树节点
 * @param {any} data 每个节点存储的数据
 * @param {node} left 左边的子节点
 * @param {node} right 右边的子节点
 */
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}
/**
 * @name show
 * 显示集合中的所有元素
 */
Node.prototype.show = function () {
  return this.data;
};

/**
 * @name BST(二叉查找树)
 * @function insert 往二叉树中插入节点
 * @function inOrder 中序遍历二叉查找树
 * @function preOrder 先序遍历二叉查找树
 * @function postOrder 后序遍历二叉查找树
 * @function getMin 获取二叉查找树最小值
 * @function getMax 获取二叉查找树最大值
 * @function find 查找给定值
 * @function removeNode 删除节点
 * @function remove 删除节点对外接口
 */
function BST() {
  this.root = null;
}
```

### 集合

ES6中新增了此类型的数据结构。

集合（set）是一种包含不同元素的数据结构。集合中的元素称为成员。

集合的两个最重 要特性是：首先，集合中的成员是无序的；其次，集合中不允许相同成员存在。

本文实现的集合以及集合方法：

```
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
```

### 链表以及双向链表

本文实现的链表以及链表方法：

```
  /**
   * @链表
   * 利用对象实现一个链表
   */

  /**
   * @name Node
   * @param element
   * 链表的节点
   */
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  /**
   * @name LList
   * @function find 查找链表中的一个节点
   * @function findPrevious 查找链表中的上一个节点
   * @function insert 向链表中插入一个节点
   * @function remove 删除链表中的一个节点
   * @function display 显示链表中的元素
   * 链表
   */
  function LList() {
    this.head = new Node("head");
  }
```

本文实现的双向链表：

```
  /**
   * @双向链表
   */
  function Node(element) {
    this.element = element;
    this.next = null;
    this.pervious = null;
  }
  /**
   * @name LList
   * @function find 查找链表中的一个节点
   * @function insert 向链表中插入一个节点
   * @function remove 删除链表中的一个节点
   * @function display 显示链表中的元素
   * @function findLast 查找链表中的最后一个节点
   * @function dispReverse 反序显示双向链表中的元素
   * 双向链表
   */
  function LList() {
    this.head = new Node("head");
  }
```

### 列表

列表是一组有序的数据

@JS中列表和数组的区别 个人理解：其他语言中，数组在申明时是需要指定数组的可存储的值的类型以及长度，

列表则不需要指定数组类型以及长度，当列表长度不够时，会生成一个新的二倍于之前的长度的数组，拷贝值进入这个数组，并舍弃旧数组

JS中的列表就相当于于数组(相对于其他语言来说)

本文实现的列表以及列表方法：

```
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
```

### 散列

散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。

散列使用的数据 结构叫做散列表。

散列基于数组实现，通过哈希算法（散列函数）得到一个数组下标，在对应数组下标位置插入元素。

哈希算法基本无法满足一个值对应唯一一个散列值，所以可以通过在链表数组存储元素(开链法:此例用的是二维数组)。

使用散列表存储数据时，通过一个散列函数将键映射为一个数 字，这个数字的范围是 0 到散列表的长度。

本文实现的散列以及散列方法：

```
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
```

### 图

图由边的集合及顶点的集合组成。

地图，就是一种图，上面的每个城镇可以看作一个顶点，连接城镇的道路便是边。

本文实现的图以及图方法：

```
/**
 * @name Vertex
 * @param {any} label 顶点值
 * @param {boolean} wasVisited 是否被访问过
 * 顶点类：用于保存顶点和边
 */
function Vertex(label) {
  this.label = label;
}
```

### 栈

栈是一种类似于列表的数据结构，栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶（类比于一摞盘子）

原以为栈的弹出是直接删除栈顶的元素，原来是将数组的指针向下挪一位，并不是直接删除栈顶元素

本文实现的栈以及栈方法：

```
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
```

### 字典

字典是一种以键 - 值对形式存储数据的数据结构，就像电话号码簿里的名字和电话号码一样。

Dictionary 类的基础是 Array 类，而不是 Object 类。

本文实现的字典以及字典方法：

```
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
```

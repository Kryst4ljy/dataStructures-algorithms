/**
 * 二叉树
 * 树是计算机科学中经常用到的一种数据结构。树是一种非线性的数据结构，以分层的方式 存储数据。
 * 二叉树是一种特殊的树，它的子节点个数不超过两个。
 * 二叉查找树是一种 特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。
 */

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
/**
 * @name insert
 * @param {any} data 要插入二叉查找树的数据
 * 往二叉树中插入节点
 */
BST.prototype.insert = function (data) {
  const n = new Node(data, null, null);
  if (this.root === null) {
    // 1.判断此二叉查找树是否为空
    this.root = n;
    return;
  }
  let current = this.root;
  while (true) {
    if (data < current.data) {
      // 2.判断插入的节点数据是否小于当前节点
      if (current.left === null) {
        // 3.判断当前节点的左节点是否为空，是的话直接插入左节点
        current.left = n;
        break;
      }
      current = current.left;
    } else {
      // 4.要插入的节点大于当前的节点
      if (current.right === null) {
        current.right = n;
        break;
      }
      current = current.right;
    }
  }
};
/**
 * @name inOrder
 * @param {node} node 要遍历的起始节点
 * 中序遍历二叉查找树
 */
BST.prototype.inOrder = function (node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
};
/**
 * @name preOrder
 * @param {node} node 要遍历的起始节点
 * 先序遍历二叉查找树
 */
BST.prototype.preOrder = function (node) {
  if (node !== null) {
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
};
/**
 * @name postOrder
 * @param {node} node 要遍历的起始节点
 * 先序遍历二叉查找树
 */
BST.prototype.postOrder = function (node) {
  if (node !== null) {
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
};
/**
 * @name getMin
 * 获取二叉查找树最小值
 */
BST.prototype.getMin = function () {
  let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
};
/**
 * @name getMax
 * 获取二叉查找树最大值
 */
BST.prototype.getMax = function () {
  let current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
};
/**
 * @name find
 * @param {any} data 给定值
 * 查找给定值
 */
BST.prototype.find = function (data) {
  let current = this.root;
  while (true) {
    if (data < current.data && current.left !== null) {
      current = current.left;
    } else if (data > current.data && current.right !== null) {
      current = current.right;
    } else if (data === current.data) {
      return current;
    } else {
      return null;
    }
  }
};
/**
 * @name remove
 * @param {any} data 给定值
 * 删除节点
 */
BST.prototype.remove = function (data) {
  this.root = this.removeNode(this.root, data);
};
/**
 * @name removeNode
 * @param {node} node 起始节点
 * @param {any} data 给定值
 * 删除节点
 */
BST.prototype.removeNode = function (node, data) {
  if (node === null) return null;
  if (node.data === data) {
    // 1.当前节点下无子节点
    if (node.left === null && node.right === null) {
      return null;
    } else if (node.left !== null && node.right === null) {
      // 2.有左边子节点，无右边子节点
      return node.left;
    } else if (node.left === null && node.right !== null) {
      // 3.无左边子节点，有右边子节点
      return node.left;
    } else {
      // 4.左右子节点都存在
      // 4.1取右节点最小值，赋值
      let current = node.right;
      while (current.left !== null) {
        current = current.left;
      }
      node.data = current.data;
      // 4.2删除右节点最小值
      node.right = this.removeNode(node.right, node.data);
      return node;
    }
  } else if (node.data < data) {
    node.right = this.removeNode(node.right, data);
    return node;
  } else {
    node.left = this.removeNode(node.left, data);
    return node;
  }
};

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.remove(23);
console.log(nums);

(function () {
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
  /**
   * @name find
   * @param {Node} item 节点
   * 查找链表中的一个节点，查找到匹配的节点则返回节点，若未匹配到节点，则返回null
   */
  LList.prototype.find = function (item) {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  /**
   * @name insert
   * @param {Node} item 节点
   * 向链表中插入一个节点（注意：如果未找到前置节点，则不插入）
   */
  LList.prototype.insert = function (newElement, item) {
    const newNode = new Node(newElement);
    let currentNode = this.find(item);
    if (currentNode !== null) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    return this;
  };
  /**
   * @name display
   * 显示链表中的元素
   */
  LList.prototype.display = function () {
    // let currentNode = this.head;
    // while (currentNode !== null) {
    //   console.log(currentNode.element);
    //   currentNode = currentNode.next;
    // }
    var currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  };
  /**
   * @name findPrevious
   * @param {Node} item 节点
   * 查找链表中的上一个节点，查找到匹配的节点则返回节点，若未匹配到节点，则返回null
   */
  LList.prototype.findPrevious = function (item) {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode && currentNode.element !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return currentNode === null ? null : previousNode;
  };
  /**
   * @name remove
   * @param {Node} item 节点
   * 删除链表中的一个节点
   */
  LList.prototype.remove = function (item) {
    let previousNode = this.findPrevious(item);
    if (previousNode !== null) {
      previousNode.next = previousNode.next.next;
    }
    return this;
  };

  var cities = new LList();
  cities.insert("Conway", "head");
  cities.insert("Russellville", "Conway");
  cities.insert("Carlisle", "Russellville");
  cities.insert("Alma", "Carlisle");
  cities.display();
  cities.remove("Carlisle");
  cities.display();
})();

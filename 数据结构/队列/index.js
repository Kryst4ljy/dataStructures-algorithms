/**
 * @队列 - 排队结账
 * 队列是一种列表，不同的是列表只能在队尾插入元素，在队首删除元素。
 * 队列用于存储按顺序排列的数据，先进先出。
 */

(function () {
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
  /**
   * @name enqueue
   * @param {any} element
   * 向队尾添加一个元素
   */
  Queue.prototype.enqueue = function (element) {
    this.dataStore[this.length++] = element;
    return this;
  };
  /**
   * @name dequeue
   * 删除队首的元素
   */
  Queue.prototype.dequeue = function () {
    this.length--;
    return this.dataStore.shift();
  };
  /**
   * @name front
   * 读取队首的元素
   */
  Queue.prototype.front = function () {
    return this.dataStore[0];
  };
  /**
   * @name back
   * 读取队尾的元素
   */
  Queue.prototype.back = function () {
    return this.dataStore[this.length - 1];
  };
  /**
   * @name clear
   * 清空整个队列
   */
  Queue.prototype.clear = function () {
    this.dataStore = [];
    this.length = 0;
    return this;
  };
  /**
   * @name toString
   * 读取整个队列的元素
   */
  Queue.prototype.toString = function () {
    return this.dataStore.toString();
  };
  /**
   * @name empty
   * @returns {boolean}
   * 判断队列是否为空
   */
  Queue.prototype.empty = function () {
    if (this.length === 0) return true;
    return false;
  };

  // var q = new Queue();
  // q.enqueue("Meredith");
  // q.enqueue("Cynthia");
  // q.enqueue("Jennifer");
  // console.log(q.toString());
  // q.dequeue();
  // console.log(q.toString());
  // console.log("Front of queue: " + q.front());
  // console.log("Back of queue: " + q.back());

  /********************************应用*****************************************************/
  // 1.基数排序 - 百位数循环三次
  function use() {
    let target = [3, 123, 43, 2, 3, 64, 342, 45, 34, 233, 12, 344];

    const queueArr = [];
    for (let i = 0; i < 10; i++) {
      queueArr[i] = new Queue();
    }

    for (let i = 0; i < 3; i++) {
      target = cardinalAsc(target, queueArr, i);
    }
    console.log(target);

    function cardinalAsc(target, queueArr, round) {
      let res = [];
      for (let i = 0; i < target.length; i++) {
        const num = parseInt(target[i] / Math.pow(10, round)) % 10;
        queueArr[num].enqueue(target[i]);
      }
      for (let j = 0; j < queueArr.length; j++) {
        while (!queueArr[j].empty()) {
          res.push(queueArr[j].dequeue());
        }
      }
      return res;
    }
  }
  // use();

  /********************************练习*****************************************************/
  function exercise() {
    /**
     * 1.修改 Queue 类，形成一个 Deque 类。这是一个和队列类似的数据结构，允许从队列两端 添加和删除元素，因此也叫双向队列。
     */
    function Deque() {
      Queue.call(this); // 继承实例方法和属性
    }
    Deque.prototype = { ...Queue.prototype }; // 继承原型属性和方法
    Deque.prototype.constructor = Deque; // 需要指定原型对象的构造函数为Deque,不然指向的是Queue,则不知道生成的实例到底是谁的
    /**
     * @name pop
     * 删除队尾的元素
     */
    Deque.prototype.pop = function () {
      this.length--;
      return this.dataStore.pop();
    };
    /**
     * @name unshift
     * @param {any} element
     * 向队首添加元素
     */
    Deque.prototype.unshift = function (element) {
      this.dataStore.unshift(element);
      this.length++;
      return this;
    };
    /**
     * 2.使用前面完成的 Deque 类来判断一个给定单词是否为回文。
     */
    function checkPalindromic(str) {
      const deque = new Deque();
      const arr = str.split("");
      for (let i = 0; i < arr.length; i++) {
        deque.enqueue(arr[i]);
      }
      const a = deque.toString();
      deque.clear();
      for (let i = 0; i < arr.length; i++) {
        deque.unshift(arr[i]);
      }
      const b = deque.toString();
      return a === b;
    }
    console.log(checkPalindromic("n2mm2n"));
  }

  exercise();
})();

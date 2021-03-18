/**
 * 定义：一个存储元素的线性集合（collection），元素可以通过索引来任意存取，索引通常是数字，用来计算元素之间存储位置的偏移量。
 * JS中的数组是一种特殊的对象，索引是该对象的属性。然而这些数字索引在内部被转换为字符串类型，这是因为JS对象中的属性名必须是字符串。
 * 因此JS的数组在效率上不如其他语言中的数组高
 * 
 * 在脚本语言中很常见的一个特性是：数组中的元素不必是同一种数据类型。
 * 
 * 可以用Array.isArray 或者 arr instanceOf 'Array' 来判断一个变量是否为一个数组
 */

(function () {
  /** 
   * 练习题1：创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
   */
  function StudentScore() {
    this.scoreArray = [];
  }
  /**
   * 添加学生成绩方法
   * @param {number} score 学生成绩
   */
  StudentScore.prototype.inputScore = function (score) {
    if (typeof score !== 'number') {
      console.log('输入的成绩必须为数字！');
    }
    this.scoreArray.push(score);
  }
  /**
   * 显示学生平均成绩方法
   * @returns {number} 平均成绩
   */
  StudentScore.prototype.getAverageScore = function () {
    if (this.scoreArray.length === 0) return 0;
    let allScore = 0;
    this.scoreArray.forEach((item) => {
      allScore += item;
    });
    return allScore / this.scoreArray.length;
  }

  // 练习题1测试
  // const st = new StudentScore();
  // st.inputScore(12);
  // st.inputScore(321);
  // console.log(st.getAverageScore());



  // *******************************************************我是一条分割线***************************************************************
  /**
   * 练习题2：将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词
   */
  const wordArray = ['Modal', 'Test', 'Allow', 'Nigger', 'Dragon', 'Yellow', '231', 'Yolo'];
  // 正序显示
  wordArray.sort();
  // 倒序显示
  wordArray.sort().reverse();
  // console.log(wordArray);



  // *******************************************************我是一条分割线***************************************************************
  











})()
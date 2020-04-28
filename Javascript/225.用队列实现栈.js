/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */
//就是用队列的结构来实现栈的特点-先进后出，后进先出
// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {  //构造函数
    this.queue = [];        //一个队列，用数组来表示[0,1,2,3]
    this.tmp = [];          //临时
};


//以下为构造函数的属性（原型），它也是一种对象，有方法和属性可以设定
//以便构造函数生产出来的对象能用上原型的上的属性和方法（是祖先）
/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
     //pop移除栈顶元素[1, 2, 3]-- - > [1, 2, 3]
     MyStack.prototype.pop = function () {
         while (this.queue.length > 1) {   //1.保存队列元素到临队列,保留最后一个入队列的元素
             this.tmp.push(this.queue.shift()); //shift（）移除并返回数组第一个值，tmp=[1,2]
         }
         var pop = this.queue.shift(); //2.栈顶元素出栈：queue=[3].shift()
         this.queue = this.tmp;    //3.移除后的栈顶元素后的，队列  queue=[1,2,3]
         this.tmp = [];           //3.1恢复临时
         return pop              //返回栈顶元素  [3]
     };



/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {    //获取栈顶元素
    while (this.queue.length > 1) {
        this.tmp.push(this.queue.shift());
    }
    var ele = this.queue.shift(); //栈顶元素，以下三步为还原队列，即不改变原队列
    this.tmp.push(ele);          
    this.queue = this.tmp;          
    this.tmp = [];
    return ele;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end


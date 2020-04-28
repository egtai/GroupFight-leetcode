/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */
//用栈的方法来实现队列的特点
// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack=[];
    this.tmp=[];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {   
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {         //从队列首部移除元素-移除栈底元素
    while (this.stack.length !== 0) {       //倒序入到一个新栈
        this.tmp.push(this.stack.pop())
    }
    var pop=this.tmp.pop();            //倒序的栈出栈顶元素即可
    while(this.tmp.length!=0){         //复原出栈顶元素后的栈
        this.stack.push(this.tmp.pop());
    }
    return pop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.stack.length !== 0) { //倒序入到一个新栈
        this.tmp.push(this.stack.pop())
    }
    var pop = this.tmp.pop(); //倒序的栈出栈顶元素即可
    this.tmp.push(pop);       //为了保持原栈内容不变
    while (this.tmp.length != 0) { //复原出栈顶元素后的栈
        this.stack.push(this.tmp.pop());
    }
    return pop;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0 ? true : false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end


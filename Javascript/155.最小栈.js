/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];         //最小栈
    this.container = [];        //栈容器
};

/** 
 * @param {number} x
 * @return {void}
 */
//以下方法js原型链上都有，只不过用其来实现js栈（数组实现）的操作
MinStack.prototype.push = function(x) {
    this.container.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     var x = this.container.pop();
     if (x === this.minStack[this.minStack.length - 1]) {
         this.minStack.pop();
     }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.container[this.container.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


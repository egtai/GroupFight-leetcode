/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
     return /^1(00)*$/.test(num.toString(2));
     //test()方法用于检测字符串是否匹配某个模式，在这里模式为 /^1(00)*$/
};
// @lc code=end


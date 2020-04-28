/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) return false; 
    //连续除而已
    while (parseInt(num / 2) === num / 2) {
        num /= 2;
    } // using the fact that 
    while (parseInt(num / 3) === num / 3) {
        num /= 3;
    } // multiplication is commutative, 
    while (parseInt(num / 5) === num / 5) {
        num /= 5;
    } // hence the order doesn't matter
    return num === 1;
};
// @lc code=end


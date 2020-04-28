/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
     var result = 0;
     var count = 32;

     while (count--) {
         result *= 2;
         result += n & 1;
         n = n >> 1;
     }
     return result;
};
// @lc code=end


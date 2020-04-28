/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var Q=["", "M", "MM", "MMM" ]; //千位（num/1000）
    var B=["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" ]; //百位（(num%1000)/100）
    var S=[ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ];//十位（(num%100)/10）
    var G=[ "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ]; // 个位（num%10）
    
    var res=Q[Math.floor(num / 1000)] + B[Math.floor((num % 1000) / 100)] + S[Math.floor((num % 100) / 10)]+G[num%10];
    return res; //注意个位数不需要向下取整，本身就是整
};

// @lc code=end


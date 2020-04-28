/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //1.trim()-->trim() 方法用于删除字符串的头尾空格,不改变原始字符串
    //2.split( ' ')-->把字符串分割为字符串数组,括号里填写分割点
    //3.pop()--->方法用于删除并返回数组的最后一个元素
    return s.trim().split(" ").pop().length;
};
// @lc code=end


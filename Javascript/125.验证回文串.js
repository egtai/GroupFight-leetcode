/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var strippedString=s.replace(/\W/g,''); //将字符串中非字母的的东西替换成空格
    var reversedString=strippedString.split('').reverse().join('');//反转后的字符串
    return strippedString.toLowerCase()==reversedString.toLowerCase(); //全部转换成大写后比较
};
// @lc code=end


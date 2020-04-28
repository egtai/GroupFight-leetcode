/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索
//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
var firstUniqChar = function(s) {
    var len = s.length;
    for (var i = 0; i < len; i++) {
        var item = s[i];
        if (s.lastIndexOf(item) === s.indexOf(item)) {
            return i;
        }
    }
    return -1;
};
// @lc code=end


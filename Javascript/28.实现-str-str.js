/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length == 0) {
        return 0;
    }
    var reg = new RegExp("" + needle + "", "gi");
    var inde = reg.exec(haystack);
    if (inde) {
        return inde.index;
    } else {
        return -1;
    }
};
// @lc code=end


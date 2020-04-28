/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var index=0;
    var len=s.length;
    for( var item of t){
        if(item===s[index]){ //找到级标记后移再找，因为这些字母需要保持相对顺序，前面的就不需要再检查了
            index++;
        }
        if(index===len){
            break;
        }
    }
    return index===len;     //如果s全部在t中找到的，即index标记完全部的s，index为s的长度
};
// @lc code=end


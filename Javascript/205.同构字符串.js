/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
巧法：indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
如：abb遍历返回回-0，1，1，
*/
var isIsomorphic = function(s, t) {
    var len=s.length;
    for(var i=1;i<len;i++){
        if(s.indexOf(s[i])!=t.indexOf(t[i])){
            return false;
        }
    }
    return true;
};
// @lc code=end


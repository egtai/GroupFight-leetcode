/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left=1;
        var right=n;
        while(left<right){
            var mid=left+Math.floor((right-left)/2);
            if(isBadVersion(mid)){      //正确版本返回false,错误版本返回true
                right=mid;
            }else{                           
                 left=mid+1;     //这个条件容易想到,正确版本前面肯定都是正确的
            }
        }
        return left;
    };
};
// @lc code=end


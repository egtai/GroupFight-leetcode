/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    //一个数是完全平方数的话，那么一定是前n项目奇数的和1+3+5+7+（2n-1）=4*4;
    var i=1;
    while(num>0){
        num-=i;
        i+=2;
    }
    return num==0;
};
// @lc code=end


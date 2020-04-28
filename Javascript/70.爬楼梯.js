/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
//动态规划
var climbStairs = function(n) {
    var a=[];
    a[0]=1;
    a[1]=1;
    for(var i=2;i<=n;i++){
        a[i]=a[i-1]+a[i-2];  //状态转移方程
    }
    return a[n];
};
// @lc code=end


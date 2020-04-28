/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
//动态规划
var minCostClimbingStairs = function(cost) {
    var f1=0;   //第一步
    var f2=0;   //第二步
    for(var i=cost.length-1;i>=0;--i){
        var f0=cost[i]+Math.min(f1,f2);
        f2=f1;
        f1=f0
    }
    return Math.min(f1,f2);
};
// @lc code=end


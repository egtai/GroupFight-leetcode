/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len=nums.length;
    if(len==0){
        return 0;
    }

    //创建一个动态规划数组DP；
    var dp=new Array(len+1); //房子从1开始
    dp[0]=0;
    dp[1]=nums[0];    //第一个房子
    for(var i=2;i<=len;i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i-1]); //两种情况取最大值，即即加上最后一个值，不加上最后一个值
    }
    return dp[len];
};
// @lc code=end


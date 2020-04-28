/*
 * @lc app=leetcode.cn id=121 lang=java
 *
 * [121] 买卖股票的最佳时机
 */
//动态规划
// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        int n=prices.length;
        int dp_i_0=0;      //dp[-1][0]=0
        int dp_i_1=Integer.MIN_VALUE; //dp[-1][-1]=-infinity
            for(int i=0;i<n;i++){
                //dp[i][0]=max(dp[i-1][0],dp[i-1][1]+prices[i])
                dp_i_0=Math.max(dp_i_0,dp_i_1+prices[i]);
                //dp[i][1]=max(dp[i-1][1],-prices)
                dp_i_1=Math.max(dp_i_1,-prices[i]);
            }
            return dp_i_0;
    }
}
// @lc code=end


/*
 * @lc app=leetcode.cn id=714 lang=java
 *
 * [714] 买卖股票的最佳时机含手续费
 */
//与122类似
// @lc code=start
class Solution {
    public int maxProfit(int[] prices, int fee) {
        int n=prices.length;
        int dp_i_0=0;
        int dp_i_1=Integer.MIN_VALUE;
            for(int i=0;i<n;i++){
                int temp=dp_i_0;
                dp_i_0=Math.max(dp_i_0,dp_i_1+prices[i]);
                dp_i_1=Math.max(dp_i_1,temp-prices[i]-fee);
            }
            return dp_i_0;
    }
    }

// @lc code=end


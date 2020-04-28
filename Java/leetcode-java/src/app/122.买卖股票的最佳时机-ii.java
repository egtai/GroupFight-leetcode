/*
 * @lc app=leetcode.cn id=122 lang=java
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
           int n=prices.length;
        int dp_i_0=0;
        int dp_i_1=Integer.MIN_VALUE;
            for(int i=0;i<n;i++){
                int temp=dp_i_0;
                dp_i_0=Math.max(dp_i_0,dp_i_1+prices[i]);
                dp_i_1=Math.max(dp_i_1,temp-prices[i]);
            }
            return dp_i_0;
    }
    }

// @lc code=end


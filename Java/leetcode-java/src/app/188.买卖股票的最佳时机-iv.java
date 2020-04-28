/*
 * @lc app=leetcode.cn id=188 lang=java
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
class Solution {
    public int maxProfit(int k, int[] prices) {
     int n=prices.length;
     if(k>n/2){
         return maxProfit(prices);
     }
     int [][][] dp=new int[n][k+1][2];
     for(int i=0;i<n;i++){
       for(int j=k;k>=1;k--){
           if(i-1==-1){
             //处理base case
             dp[i][j][0]=0;
             dp[i][j][1]=-prices[i];
             continue;
           }
           dp[i][j][0]=Math.max(dp[i-1][j][0],dp[i-1][j][1]+prices[i]);
           dp[i][j][1]=Math.max(dp[i-1][j][1],dp[i-1][j-1][0]-prices[i]);
      }
     }
       return dp[n-1][k][0];
    }
}
// @lc code=end


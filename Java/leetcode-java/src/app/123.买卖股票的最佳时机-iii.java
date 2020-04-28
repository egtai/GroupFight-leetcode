/*
 * @lc app=leetcode.cn id=123 lang=java
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
     int n=prices.length;
     
     if(max_k>n/2){
         return maxProfit(prices);
     }
     int [][][] dp=new int[n][max_k+1][2];
     for(int i=0;i<n;i++){
       for(k=max_k;k>=1;k--){
           if(i-1==-1){
             //处理base case
             dp[i][k][0]=0;
             dp[i][k][1]=-prices[i];
             continue;
           }
           dp[i][k][0]=Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i]);
           dp[i][k][1]=Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i]);
      }
     }
    }

}

// @lc code=end


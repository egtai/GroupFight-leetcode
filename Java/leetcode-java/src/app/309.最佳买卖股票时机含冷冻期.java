class Solution {
    public int maxProfit(int[] prices) {
        int n=prices.length;
        //两种基本状态如下：
        int dp_i_0=0;       //不持有股票时的最小利润
        int dp_i_1=Integer.MIN_VALUE; //持有股票的最大利润
        int dp_pre_0=0;  //等价dp_[i-2][0];
            for(int i=0;i<n;i++){
                int temp=dp_i_0;
                dp_i_0=Math.max(dp_i_0,dp_i_1+prices[i]); //状态转移方程，求其中的最大值
                dp_i_1=Math.max(dp_i_1,dp_pre_0-prices[i]);
                dp_pre_0=temp;
            }
            return dp_i_0;
     }
    }
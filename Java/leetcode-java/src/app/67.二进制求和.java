/*
 * @lc app=leetcode.cn id=67 lang=java
 *
 * [67] 二进制求和
 */

// @lc code=start
class Solution {
    public String addBinary(String a, String b) {
        StringBuilder ans=new StringBuilder();
        int cal=0;
        int alen=a.length();
        int blen=b.length();
        for(int i=alen-1,j=blen-1;i>=0 || j>=0;i--,j--){
            int sum=0;
            sum+=i>=0?a.charAt(i)-'0':0;
            sum+=j>=0?b.charAt(j)-'0':0;
            ans.append(sum%2);
            cal=sum/2;
        }
        ans.append(cal==1? cal:" ");
        return ans.reverse().toString();
    }
}
// @lc code=end


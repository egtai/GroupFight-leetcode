/*
 * @lc app=leetcode.cn id=12 lang=java
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
class Solution {
    public String intToRoman(int num) {
        String[][] str={
         {"","M","MM","MMM"}, //千位（num/1000）
         { "", "C", "CC"," CCC", "CD","D","DC","DCC","DCCC","CM" }, //百位（(num%1000)/100）
         { "", "X", "XX", "XXX","XL","L","LX","LXX","LXXX","XC"},//十位（(num%100)/10）
         { "", "I", "II", "III","IV","V","VI","VII","VIII","IX"} // 个位（num%10）
        };
         int i=3;
         StringBuilder res=new  StringBuilder();
        while(num!=0){
            int digit=num%10;
            num/=10;
            res.append(str[i][digit]);
            i--;
        }
       //然后逆序输出，不改变原字符串内部顺序
}
 }
// @lc code=end


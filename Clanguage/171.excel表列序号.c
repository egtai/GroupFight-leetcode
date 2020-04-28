/*
 * @lc app=leetcode.cn id=171 lang=c
 *
 * [171] Excel表列序号
 */

// @lc code=start

//字符串的遍历，进制转换(26进制转10进制)
int titleToNumber(char * s){
int n=0;
while(*s!=0){
    int num=*s-'A'+1;
    n=n*26+num;
    s++;
}
return n;
}


// @lc code=end


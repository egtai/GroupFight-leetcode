/*
 * @lc app=leetcode.cn id=168 lang=c
 *
 * [168] Excel表列名称
 */

// @lc code=start

//26进制转10进制；(n-1)%26--->0-25+65('A')(A-Z);
char * convertToTitle(int n){
if(n<=0){
    return " ";
}
char *result=(char *)malloc(1024);
int len=0; //出字符串的长度
do{
    result[len++]=((n-1)%26)+'A'; //A的ascll码为65 ，A-Z(65-90);
    n=(n-1)/26;    //
}while(n>0);
result[len]='\0';  //直接令最后一个为0，不满足条件时退出n<0

int i=0;
int j=0;
for(i=0,j=len-1;i<j;i++,j--){  //字符串数组取反
    char c=result[i];
    result[i]=result[j];
    result[j]=c;
}
return result;
}


// @lc code=end


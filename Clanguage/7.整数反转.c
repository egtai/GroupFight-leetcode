/*
 * @lc app=leetcode.cn id=7 lang=c
 *
 * [7] 整数反转
 * 溢出判断，注意int的有效取值范围,在ret移位前进行判断
 */

int reverse(int x){
  int digit=0;
  int ret=0;
    while(x!=0){
        digit=x%10;
        
        if(ret>INT_MAX/10 || ret<INT_MIN/10){ //溢出前（每一次移位前）进行判断
            return 0;
        }
        ret=ret*10+digit;  //移位
        x /= 10;
    }
    return ret;
  }





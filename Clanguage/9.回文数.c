/*
 * @lc app=leetcode.cn id=9 lang=c
 *
 * [9] 回文数
 * 还是在溢出判断这会要注意下，移位前记得判断溢出ret
 */


bool isPalindrome(int x){
int digit=0;
int ret=0;
int a=x;   //保存x的原始值
if(x<0){        //负数直接输出false
    return false;
}else if(x==0){
    return true;
}else{

    while(x!=0){      //反转判断是否溢出
        digit=x%10;
        if(ret>INT_MAX/10 || ret<INT_MIN/10){
            return false;
        }
        ret=ret*10+digit;
        x/=10;
    }

    if (ret == a)   //比较反转后的结果是否相等
    {
        return true;
    }
    else
    {
        return false;
    }

}
}




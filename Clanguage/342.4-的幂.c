/*
 * @lc app=leetcode.cn id=342 lang=c
 *
 * [342] 4的幂
 */

// @lc code=start
//判断任何次幂的c语言模板

bool isPowerOfFour(int num){
if(num==0){
    return false;
}

double m=log(num)/log(4),a,b,c;
c=m;
if(c-c>=0.5){
    c=c+1;
}
b=m-(int)c;
if(b<0){
    b=-b;
}
if(b<0.0000000001){
    return true;
}
return false;

}


// @lc code=end


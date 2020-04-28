/*
 * @lc app=leetcode.cn id=231 lang=c
 *
 * [231] 2的幂
 */

// @lc code=start


bool isPowerOfTwo(int n){
if(n==0){
    return false;
}
double m=log(n)/log(2),b,c;
c=m;
if(c-(int)c>=0.5){
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


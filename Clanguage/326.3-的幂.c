/*
 * @lc app=leetcode.cn id=326 lang=c
 *
 * [326] 3的幂
 */

// @lc code=start


bool isPowerOfThree(int n){
if(n==0){
    return false;
}

double m=log(n)/log(3),a,b,c;
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


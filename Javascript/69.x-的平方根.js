/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var left=0;
    var right=Math.floor(x/2)+1; //为了照顾1把把右边界加1；
    var mid=0;
    while(left<right){ //这里left<right循环结束后，返回左右边界都OK
        mid=left+Math.floor((right-left+1)/2); //选择右中位数，否则进入死循环,列当x=9时
        if(mid*mid>x){  //这个逻辑分支最容易想到。第一个分支排除中位数
            right=mid-1;
        }else{                          //第二个分支不排除中位数
            left=mid;
        }
    }
    //因为一定存在所以无需后续的处理
    return left;
};
// @lc code=end


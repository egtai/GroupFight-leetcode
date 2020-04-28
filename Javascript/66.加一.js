/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i=0;
    var len=digits.length;
    for(i=len-1;i>=0;i--){ //,只管加一进位，包含123，129，999，三种情况
        if(digits[i]==9){
            digits[i]=0;
        }else{
            digits[i]++;
            break;
        }
    }
    if(digits[0]==0){  //循环结束后，只需要判断首位是不是等于0，即9/99+1,数组增加一位
       digits.push(0); //数组扩增加
       digits[0]=1;
    }
    return digits;
};
// @lc code=end


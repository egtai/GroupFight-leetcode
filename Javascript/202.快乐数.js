/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
     var digit = 0;
     var i = 0;
     var sum = 0;
     while (n > 0) {
         digit = n % 10; //逆着把每一位数取出来
         sum += digit * digit;
         n = Math.floor(n / 10);
     }
    if(sum>4){ //仅在n>4时进行递归，因为4以上的数最后归宿为1，4，3
               //而4，和3的归宿为4，是个死循环。
        return isHappy(sum);
    }else if(sum==1){
        return true
    }
    return false;
};

// @lc code=end


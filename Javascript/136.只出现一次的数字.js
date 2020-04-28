/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//位运算
 /* 
  1. 一个数0做XOR(异或运算) 等于本身： a ^0=a;
  2. 一个数和其本身做XOR(异或运算) 等于0： a ^a=0;
  3.异或运算满足交换率和结合率；
 */
var singleNumber = function(nums) {
    var ans=0;
    for(var i=0;i<nums.length;i++){
        ans ^=nums[i];
    }
    return ans;
};
// @lc code=end


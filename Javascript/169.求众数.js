/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len=nums.length;

    var mid=paraseInt(len/2);
    nums.sort();
    return nums[mid];
};
// @lc code=end


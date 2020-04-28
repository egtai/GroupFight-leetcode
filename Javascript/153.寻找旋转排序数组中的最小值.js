/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left=0;
    var right=nums.length-1;
    while(left<right){
        var mid=left+Math.floor((right-left)/2); //这里选左中位数，用含有两数的数组简单测试一下就知道了
        if(nums[mid]>nums[right]){   //无序的地方在右边
            //如果nums[mid]>nums[right]说明，mid的左边递增，右边递减，在右边找就OK了
            left=mid+1;
        }else{
            right=mid;
        }
    }
    return nums[left];
};
// @lc code=end


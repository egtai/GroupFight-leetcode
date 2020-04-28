/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
1.nums[-1] = nums[n] = -∞。,只要一个元素比相邻元素大，那么沿着它一定可以找到一个峰值
2.找出mid，如果num[mid]>num[mid+1],说明处于上升趋势，峰值一定在mid的右侧，即left=mid+1;
如果num[mid]<num[mid+1] right=mid(画个数轴很好理解的)

*/
var findPeakElement = function(nums) {
      var left=0,
          right=nums.length-1;
          while(left<right){
              var mid=left+Math.floor((right-left)/2);
              if(nums[mid]>nums[mid+1]){
                  right=mid;   //左移，不可以right=mid-1,可能mid就是峰值
              }else{
                 left=mid+1;  //右移，mid位置上的数小于mid+1,峰值不可能是mid了
              }
          }
          return left;
};
// @lc code=end


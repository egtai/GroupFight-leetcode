/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
/*
滑动窗口
*/
var minSubArrayLen = function(s, nums) {
   var left=0,
       right=0,
       sum=0,
       ans=Infinity;
   var len=nums.length;
   while(right<len){
         sum += nums[right]; //1.left不动，right后移，满足条件后求长度
         right++;     //sum满足了条件，right还会移动一次，下面长度不用+1
         while(sum>=s){   //2.满足条件，继续优化，不满足重复1
            ans=Math.min(ans,right-left); //3.更新最小长度
            sum-=nums[left];   //每一次移动left，都要减去这个数
            left++;
         }
             
   }
   if(ans==Infinity) return 0;  //没找到
   return ans;
};
// @lc code=end


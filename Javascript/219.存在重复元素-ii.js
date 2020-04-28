/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
 const set=new Set(); //建哈希表
 var len=nums.length;
 for(let i=0;i<len;i++){
     if(set.has(nums[i])){
         return true;
     }
     set.add(nums[i]);
     if(set.size>k){
         set.delete(nums[i-k]);
     }
 }
 return false;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   if(nums==null || nums.length==0){
       return -1;
   }
   let left=0;
   let right=nums.length-1;
   while(left<=right){
     let mid=left+Math.floor((right-left+1)/2);
     if(nums[mid]===target){
         return mid;
     }
     
     //123567
     //前半部分有序 2 3 4 5 6 7 1
     if (nums[left] < nums[mid]) {            //大情况一:
         if(target>=nums[left]&&target<nums[mid]){
             if(target==nums[left]){   //优化
                 return left;
             }
             right=mid-1
         }else{
             left=mid+1
         }
     }else{                 // nums[left]>nums[mid]大情况二：    //后半部分有序6 7 1 2 3 4 5
            if(target<=nums[right]&&target>nums[mid]){
                if(target==nums[right]){
                     return right;
                }
                left=mid+1
            }else{
                right=mid-1
            }
     }
   }
   return -1;
};

// @lc code=end


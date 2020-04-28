/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  //排序
  nums.sort((a,b)=>a-b);
   let closer=Infinity;       //最近值的初始化
  for(let i=0;i<nums.length-2;i++){
      let l=i+1;
      let r=nums.length-1;
      while(l<r){
          const localSum=nums[i]+nums[l]+nums[r];
          
          //更新最接近的和
          if(Math.abs(localSum-target)<Math.abs(closer-target)){
               closer=localSum;
          }
          
          //不断的去靠近
          if(localSum>target){  
              r--;
          }else{
              l++;
          }
      }
  }
  return closer;
};
// @lc code=end


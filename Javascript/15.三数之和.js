/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   let ans=[];  //返回的新数组
   const len=nums.length;
   if(nums==null || len<3){
       return ans;
   }
   
   //数组排序（升序）
   nums.sort((a,b)=>a-b);

   for(let i=0;i<len-2;i++){
       if(nums[i]>0){  //第一种情况，当前数大于0，三数和肯定大于0（因为升序）
          break;
       }
       if(i>0 &&nums[i]==nums[i-1]){ //说明该数字重复，会导致结果重复，跳过
           continue;
       }
       
       //i位置的右边的两个端点
       let L=i+1;    
       let R=len-1
       while(L<R){
           var  sum=nums[i]+nums[L]+nums[R];
           if(sum==0){                      //第二种大情况符合条件
               ans.push([nums[i],nums[L],nums[R]]);
               while(L<R&&nums[L]==nums[L+1]){  //第二小情况，去重复
                   L++;
               }
               while(l<R&&nums[R]==nums[R-1]){  //第二小情况之二去重复，这里是R-1防止越界
                   R--;
               }
               
               //避免重复,两个指针需要想向靠近遍历所有元素组合
               L++;
               R--;
           }
           else if(sum>0){
               R--
           }
           else if(sum<0){
               L++;
           }
       }
   }
   return ans;
};
// @lc code=end


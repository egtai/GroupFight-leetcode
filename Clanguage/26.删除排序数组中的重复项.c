/*
 * @lc app=leetcode.cn id=26 lang=c
 *
 * [26] 删除排序数组中的重复项
 * 双指针
 */


int removeDuplicates(int* nums, int numsSize){
 if(numsSize==0){
     return 0;
 }
 int i=0; //b不同数值计数器。移动指针
 int j=0; //块指针
 for(j=0;j<numsSize;j++){
     if(nums[j]!=nums[i]){ //相等时，就跳过重复项，直接j++,不i++
         i++;             //不相等等时，计数并移位
         nums[i]=nums[j];  //将j位的值赋给i的下一位（i的下一位等于i位）--》删出了i++位和i位相同的元素
     }
 }
 return i+1;
}




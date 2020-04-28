/*
 * @lc app=leetcode.cn id=1 lang=c
 *
 * [1] 两数之和
 */


/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
  int i=0;
  int j=0;
  int *result;
  *returnSize=0;
  for(i=0;i<numsSize;i++){
      for(j=i+1;j<numsSize;j++){
          if(nums[i]+nums[j]==target){
            if((result=(int*)malloc(2*sizeof(int)))==NULL){
                return NULL;
            }
            *returnSize=2;
              result[0]=i;
              result[1]=j;
              return result;
          }
      }
  }
  return NULL;
}




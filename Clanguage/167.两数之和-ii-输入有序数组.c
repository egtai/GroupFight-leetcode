/*
 * @lc app=leetcode.cn id=167 lang=c
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
//利用排好序的特性，采用双指针可以达到妙解

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* numbers, int numbersSize, int target, int* returnSize){
int left=0;     //index1
int right=numbersSize-1; //index2
while(left<right){ //不考虑溢出，因为每个输入都有唯一的答案
    int sum = numbers[left] + numbers[right];
    if (sum < target)
    {
        left++;
  }else if(sum>target){
        right--;
  }else{
      break;
  }
}
int*result=malloc(2*sizeof(int));
*returnSize=2;
result[0] = left+1; //返回的下标值（index1 和 index2）不是从零开始的
result[1]=right+1;
return result;
}


// @lc code=end


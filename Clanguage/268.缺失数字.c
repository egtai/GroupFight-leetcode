/*
 * @lc app=leetcode.cn id=268 lang=c
 *
 * [268] 缺失数字
 */

// @lc code=start

//位运算-最简单
int missingNumber(int* nums, int numsSize){
int missing=numsSize;
int i=0;
for(i=0;i<numsSize;i++){
    missing ^=i^nums[i];
}
return missing;
}


// @lc code=end


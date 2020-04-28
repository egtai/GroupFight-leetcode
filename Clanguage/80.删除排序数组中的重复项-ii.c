/*
 * @lc app=leetcode.cn id=80 lang=c
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start


int removeDuplicates(int* nums, int numsSize){
int i=0; //快指针-->遍历指针
int j=1; //慢指针-->写入指针
if(numsSize==0){
    return 0;
}
if(numsSize==1){
    return 1;
}
for(i=2;i<numsSize;i++){
    if(nums[i]!=nums[j-1]){
        j++;
        nums[j]=nums[i];
    }
}
 return j+1;
}


// @lc code=end


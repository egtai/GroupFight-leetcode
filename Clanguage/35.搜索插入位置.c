/*
 * @lc app=leetcode.cn id=35 lang=c
 *
 * [35] 搜索插入位置
 */

// @lc code=start

//利用二分查找--->有序数组查目标值常用法
int searchInsert(int* nums, int numsSize, int target){
int left=0;
int right=numsSize-1;
while(left<=right){
    int mind=(left+right)/2;
    if(nums[mind]==target){
        return mind;
    }else if(nums[mind]<target){
        left=mind+1;
    }else{
        right=mind-1;
    }
}
return left; //因为插入的数要不在存在，要不最大，在数组外，要不最小在0；
}


// @lc code=end


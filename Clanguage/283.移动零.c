/*
 * @lc app=leetcode.cn id=283 lang=c
 *
 * [283] 移动零
 */

// @lc code=start

//双指针法
void moveZeroes(int* nums, int numsSize){

int i=0;  //快指针遍历数组
int j=0;  //慢指针，每一次移动前都把为0的元素往后移都了

for(i=0,j=0;i<numsSize;i++){
   if(nums[i]!=0){
       int temp=nums[i];
       nums[i]=nums[j];
       nums[j]=temp;
       j++;
}
  }
}

// @lc code=end

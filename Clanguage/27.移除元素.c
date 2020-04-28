/*
 * @lc app=leetcode.cn id=27 lang=c
 *
 * [27] 移除元素
 * 数组元素顺序可以改改变
 * 时：O(N)
 * 空：O(1)
 */

//法一：拷贝覆盖
// int removeElement(int* nums, int numsSize, int val){
//  int i=0;
//  int count=0; //计数器，移动指针
//  for(i=0;i<numsSize;i++){
//      if(nums[i]!=val){ //将不等于关键词的值拷贝到覆盖到原数组
//          nums[count++]=nums[i];
//      }
//  }
//  return count;
// }

//法2：:交换移除-->适用于删除元素较少时
int removeElement(int *nums, int numsSize, int val)
{
    int i = 0;
    int count = 0; //计数器，移动指针
    for (i = 0; i < numsSize;)
    {
      if(nums[i]==val){  //如果相等将当前值与数组最后一个值进行交换
          nums[i]=nums[numsSize-1]; 
          numsSize--;  //然后数组长度减1-->移除最后一个元素值
      }else{
          i++;
      }
    }
    return numsSize;
}

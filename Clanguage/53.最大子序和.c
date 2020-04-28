/*
 * @lc app=leetcode.cn id=53 lang=c
 *
 * [53] 最大子序和
 */

// @lc code=start
//动态规划

int maxSubArray(int* nums, int numsSize){
int result=nums[0]; //保存子序列最大结果   
int sum=0;         //b保存当前子序列的和
int i=0;
for(i=0;i<numsSize;i++){      
    if(sum>0){                 //增益，保留并加上当前遍历的元素值
        sum+=nums[i];
    }else
    {               //否则舍弃，sum无增益效果舍弃直接等于当前元素值
        sum=nums[i];         
    }
    if(sum>result){    //每一轮比较sum.result，设最大值为result,这一步防止增益时加上负数或更新成更大的值
        result=sum;
    }
}
return result;
}


// @lc code=end


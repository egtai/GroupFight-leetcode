/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var j=nums.length-1;  //最右边的
    var i=j-1;           //次最右的

    while(nums[i+1]<=nums[i]){
        i--;
    }

    if(i>=0){
        while(nums[j]<=nums[i]){
            j--;
        }
        swap(nums,i,j);
    }

    ArrayReverse(nums,i+1);
};

//反转数组函数
function ArrayReverse(nums,start){
    var i=start;
    var j=nums.length-1;
    while(i<j){
        swap(nums,i,j);
        i++;
        j--
    }
}

//交换值函数
function swap(nums,i,j){
    var temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}
// @lc code=end


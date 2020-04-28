/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var dp=[0];        //新建一个数组保存前n项的和
    var sum=0
    for(var i=0;i<nums.length;i++){
        sum+=nums[i];   //求前n项的和
        dp.push(sum); //从0位到n位每位之前的的和求出来
    }
         this.re=dp;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var re=this.re;
    return re[j+1]-re[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end


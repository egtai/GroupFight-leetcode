/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var temp = {}                 //创建一个新对象
    // var arr = [];                 //创建一个空数组
    var count=0;
    len = nums.length;
    for (var i = 0; i < len; i++) {
        if (!temp[nums[i]]) {                //第一次都为undefined,所以要为其赋值-->!undefined继续执行。
            temp[nums[i]] = "abc";          //为第一次变为属性名的赋值
            // arr.push(nums[i]);           //放到新数组上去
            count++;
        }
    }
    return count;              //返回去重后的数组
};


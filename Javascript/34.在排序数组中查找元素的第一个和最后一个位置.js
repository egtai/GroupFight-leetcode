/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
     var left=0,
         right=nums.length-1;
    var res=[];
    if(nums[right]<target || nums[left]>target || nums.length==0){    //特殊情况排除
          return res.concat(-1,-1);
    }

    var start=left_biner(nums,target);    //左边界
    var end=right_biner(nums,target);    //右边界
    return res.concat(start,end);
         
};

//1.寻找左边界数
function left_biner(nums, targt) {
    var left = 0;
    var right = nums.length - 1;
    while (left + 1 < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == targt) {
            right = mid;                                  //收缩右边界往左边来
        }
        else if (nums[mid] > targt) {
            right = mid;
        } else if (nums[mid] < targt) {
            left = mid;
        }
    }
    if (nums[left] == targt) return left;        //重左边先判断，因为要优先返找到的数的左边界数
    if (nums[right] == targt) return right;
    return -1;
}



//2.寻找右边界数
function right_biner(nums, targt) {
    var left = 0;
    var right = nums.length - 1;
    while (left + 1 < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == targt) {                             //这一步决定着左右边界的收缩
            left = mid;                                    //收缩左边界---往右边来
        }
        else if (nums[mid] > targt) {
            right = mid;
        } else if (nums[mid] < targt) {
            left = mid;
        }
    }
    if (nums[right] == targt) return right;              //重右边先判断
    if (nums[left] == targt) return left;
    return -1;
}



// @lc code=end


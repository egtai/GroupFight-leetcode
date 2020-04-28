/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//一遍哈希法：
var twoSum = function(nums, target) {
    let ret=[];   //存储返回值下标
    let exsit={};  //新建一个对象用来记录和为目标的元素，利用对象属性的唯一性
    let len=nums.length;
    for(let i=0; i<len;i++){
        if(typeof (exsit[target-nums[i]]) !=="undefined"){
            //和为目标的两个元素添加到ret中：
            ret.push(exsit[target - nums[i]]);
            ret.push(i);
        }
        exsit[nums[i]]=i;    //exsit对象属性赋值：元素（属性）---下标（值）
    }
    return ret
};


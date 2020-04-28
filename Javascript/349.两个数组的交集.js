/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
类似于数组, 但是成员的值都是唯一的, 
Set本身是一个构造函数用来生成Set数据结构
Set结构的实例方

*/
var intersection = function(nums1, nums2) {
    //创建两个hash表
    var hash1=new Set(nums1);
    var hash2 = new Set(nums2);
    var res=[];
    //遍历判断元素是否同时在两表，如果是将它存为新的数组中去
    for(var i of hash1){
        if(hash2.has(i)){
            res.push(i);
        }
    }
    return res;
};
// @lc code=end


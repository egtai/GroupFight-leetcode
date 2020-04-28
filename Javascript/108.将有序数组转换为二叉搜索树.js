/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//二分法+递归
//数组为例[-10,-3,0,5,9]
//arrayObject .slice(star,end)返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
var sortedArrayToBST = function(nums) {
    if(!nums.length){
        return null;
    }
    var mid=Math.floor(nums.length/2);       //取中间值
    var root=new TreeNode(nums[mid]);        //中值为根节点
       
    //递归调用
    root.left = sortedArrayToBST(nums.slice(0, mid)); //[-10,-3]
    root.right=sortedArrayToBST(nums.slice(mid+1));  //[5,9]

    return root;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0;
    }else{
        var left=maxDepth(root.left);        //左子树高度最大值
        var right=maxDepth(root.right);      //右子树高度最大值
        return Math.max(left,right)+1;    //取较大的值再加上根节点值->最大深度
    }
};
// @lc code=end


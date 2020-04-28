/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root==null){
        return null;
    }
    var temp=root.left;
    root.left=root.right;
    root.right=temp;
    
    //调用框架
    var left = invertTree(root.left);
    var right = invertTree(root.right);
    return root;
};
// @lc code=end


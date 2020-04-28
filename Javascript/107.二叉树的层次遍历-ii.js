/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var ans=[]

    if(!root){
        return [];
    }

    if(root.left===null && root.right===null){
        return [root.val];
    }

    var left=levelOrderBottom(root.left);
    var right=levelOrderBottom(root.right);
    ans.push([root.val]);
   return ans.push(left.concat(right));
   
};
// @lc code=end


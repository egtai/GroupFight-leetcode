/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
 //递归
 if (root == null) return 0;
 var left = countNodes(root.left);
 var right = countNodes(root.right);
 return left + right + 1;

 //二分法：
  
};
// @lc code=end


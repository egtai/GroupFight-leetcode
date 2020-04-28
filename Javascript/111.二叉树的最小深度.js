/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
      if (root===null) {
          return 0;
      }
      if(root.left===null){    //左子树无，最小深度去右子树找，下同
          return minDepth(root.right) + 1; //当根节点左/右子树都为空时，返回最小深度+1;
      }
      if (root.right === null) {
          return minDepth(root.left)+1;
      }
      return Math.min(minDepth(root.left),minDepth(root.right))+1;
};
// @lc code=end


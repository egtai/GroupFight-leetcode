/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
    if(root==null){
        return 0;
    }
    if(root.left==null){    //如果左子树不存在，返回右子树的左孩子和
        return sumOfLeftLeaves(root.right)
    }

    if(root.left.left==null && root.left.right==null){ //左子树为叶子节点
        return sumOfLeftLeaves(root.right)+root.left.val;
    }

    return sumOfLeftLeaves(root.left) + sumOfLeftLeave(root.right);
};
// @lc code=end


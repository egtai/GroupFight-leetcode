/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
/*
 root要不做的不仅是和最近的左右子树比，它还要和左右所有的节点比
 均满足大于所有左边的，小于所有右边的
 需要增加参数列表
*/
var isValidBST = function(root) {
    return isValid(root,null,null)
};

//辅助函数，增加参数列表,min,max
var isValid = function (root, min, max) {
    if (!root) return true;
    if (min && root.val <= min.val) return false; //min为遍历右节点时，保存根节点为一个最小值，即小于右边的所有
    if (max && root.val >= max.val) return false;  //max为遍历左节点时，保存根节点为一个最大值，即大于左边的所有
    return isValid(root.left, min, root) && isValid(root.right, root, max);
};


// @lc code=end


/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
    // 1.这一部是一个节点要做的事即框架
    function getHeight(node) { //求二叉树最大深度
        if (node === null) {
            return 0;
        }
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }
    if (root === null) {
        return true;
    }

    //2这一部分是调用框架
    return isBalanced(root.left) && isBalanced(root.right) && //这里的两个函数&&起来是为了减少因一个节点不满足而不必要的后续判断
        Math.abs(getHeight(root.left) - getHeight(root.right)) < 2;
};
// @lc code=end


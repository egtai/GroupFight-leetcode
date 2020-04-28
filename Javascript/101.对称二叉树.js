/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    return ism(root,root);
};

var ism=function(p,q){
    if(p==null && q==null){
        return true;
    }
    if(p==null || q==null){
        return false;
    }

    return p.val==q.val && ism(p.left,q.right) &&ism(p.right,q.left); //相反值相等
}
// @lc code=end


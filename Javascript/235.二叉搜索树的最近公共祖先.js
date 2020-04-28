/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //1.框架——如果两节点在根节点两侧，那么就返回根节点，否则递归调用
    if (p.val < root.val && q.val < root.val) {            //如果p,q节点值都小于根节点，那么在左子树上找
        return lowestCommonAncestor(root.left, p, q);
    }
    
    else if (p.val > root.val && q.val > root.val) {       //如果节点值大于根节点，那么在右子树
        return lowestCommonAncestor(root.right, p, q);
    }
   
    else {             //以上都不满足找到节点
        return root;
    }
};
// @lc code=end


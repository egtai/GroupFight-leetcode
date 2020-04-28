/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
    if (!root || root === p || root === q) { //一个节点也可以是它自己的祖先，去，p和q只要有一个等于root，那他们的租先就是root
          return root;
    }

    //2.递归调用框架
     var left = lowestCommonAncestor(root.left, p, q);
     var right = lowestCommonAncestor(root.right, p, q);
     //1.递归调用框架

    // if(left && right){      //p和q能在root左右节点找到，即p,q节点在当前root节点两侧，root为祖先
    //     return root;
    // }else if(left){      //只在左子树找到
    //     return left;
    // }else if(right){     
    //     return right;
    // }
    if (!left) return right   //左子树为查找空，只在右子树找到
    if (!right) return left  //右子树为查找空，只在左子树找到
    return root;            //左右子树都不为空，那只能在根结点了
    
    // var resL = lowestCommonAncestor(root.left, p, q);
    // var resR = lowestCommonAncestor(root.right, p, q);
    // return (resL && resR) ? root : (resL || resR);
};
// @lc code=end


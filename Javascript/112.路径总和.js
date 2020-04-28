/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
/*老套路，写出一个节点要做的事，其余递归调用即可 */
var hasPathSum = function(root, sum) {
    
    //框架
    if(root==null){
        return false
    }
    sum-=root.val; //即为下一个要找的值
    if((root.left==null)&&(root.right==null)){
        return (sum==0);
    }

    //调用框架
    return hasPathSum(root.left,sum) || hasPathSum(root.right,sum); //从左右子树中找
};
// @lc code=end


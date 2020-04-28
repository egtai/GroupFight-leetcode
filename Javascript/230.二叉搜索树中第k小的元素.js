/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
/*
根据二叉树的性质，节点数要大于左中位数，小于右中位数，那么
中序遍历（左根右），出来的树就是按顺序排列的，第k个最小的元素，就是遍历出数的第K-1一个元素
*/
var kthSmallest = function(root, k) {
   let result=null;
   function midorder(node){
       if(!node)return;
       midorder(node.left);
       k--;
       if(k==0){
           result=node.val;
           return;
       }
       midorder(node.right)
   }
   midorder(root);
   return result;
};
// @lc code=end


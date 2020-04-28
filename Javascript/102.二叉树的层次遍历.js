/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
   var result = [];    //保存每一层的节点
   var level = 0;      //层数
   traverse(root, level);
   return result;
   
   //辅助函数，增加了一个参数列表level
   function traverse(root, level) {
       if (root === null) {
           return;
       } else {
           if (level >= result.length) { //判断每一层是否都加入了创建的数组，
               result[level] = [];     //为每一层创建一个新的数组
           }
           result[level].push(root.val); //将该层的数加入到数组中去

           //左右结点调框架
           traverse(root.left, level + 1); //每一层遍历
           traverse(root.right, level + 1);
       }
   }
   
};
// @lc code=end
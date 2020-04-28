/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
    //深度优先遍历-栈递归
var isSameTree = function(p, q) {
    if(p==null && q==null){     //当两颗树为空时返回true
          return true;
    }
    
    if(p==null || q==null){    //其中一个为空时返回false
       return false;
    }
   if(p.val!=q.val){          //节点值不相等返回false
      return false;
   }
   
   return  isSameTree(p.left,q.left) &&isSameTree(p.right,q.right); //递归调用比较左右节点
};
// @lc code=end


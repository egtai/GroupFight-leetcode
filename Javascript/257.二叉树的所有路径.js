/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

/*
  1.Array.concat()方法：concat() 方法用于连接两个或多个数组。
    该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本

  2.Array.map()方法：方法返回一个新数组，此方法可以以一个函数为参数，循环数组的每一个元素，函数将数组中的元      素接收为单个参数进行处理返回新的数组.
 */
var binaryTreePaths = function (root) {
    //框架   ---终止条件
    if (!root) {
        return [];
    }

    if (root.left === null && root.right === null) {
        return [root.val.toString()];
    }

    //调用 ---返回值
    var left = binaryTreePaths(root.left);
    var right = binaryTreePaths(root.right);
    //调用

    //本层递归做些啥
    return left.concat(right).map(function (item) {
        return root.val + "->" + item;
    })
};
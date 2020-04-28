/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//与一个节点交换：
var deleteNode = function(node) {
    node.val=node.next.val;   //该节点的值变为后节点的值
    node.next=node.next.next;
};
// @lc code=end


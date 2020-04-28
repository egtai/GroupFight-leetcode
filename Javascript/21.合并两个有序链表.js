/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1==null){       //递归的条件是有一条遍历完了指向了空
        return l2;
    }
    if(l2==null){
        return l1;
    }
    if(l1.val<l2.val){
        l1.next=mergeTwoLists(l1.next,l2);
        return l1;                 //返回值小，因为是要从小到大排序的
    }else{
        l2.next=mergeTwoLists(l2.next,l1);
        return l2;
    }
};
// @lc code=end


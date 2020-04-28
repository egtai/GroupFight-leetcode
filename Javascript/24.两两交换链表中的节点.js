/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */

 //递归
var swapPairs = function(head) {
  if(!head || !head.next){
      return head                   //递归终止条件
  }
  
  //调用单元
   var v1=head;
   var v2=head.next;
   var v3=v2.next;
   
   v2.next=v1;
   v1.next=swapPairs(v3);
   return v2;            //返回的值

};
// @lc code=end


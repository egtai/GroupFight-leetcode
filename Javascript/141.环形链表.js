/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */

//块慢指针法
/*
 如果成环势必在一个环内跑的块的指针会追上跑的块的指针
*/
var hasCycle = function(head) {
    if(!head|| !head.next){
        return false;
    }
    var fast=head;     //快指针
    var slow=head;     //慢指针
    while(fast.next&&fast.next.next){  //令快指针做个判断，节省时间遇到空结束，环是没空的，即在在循环内判断跳出即可
        slow=slow.next;          //慢指针走一步
        fast=fast.next.next;     //快指针走两步
        if(slow==fast){          //块慢指针相遇
            return true;         
        }
    }
     return false;             //循环结束遇到null即无环
};
// @lc code=end


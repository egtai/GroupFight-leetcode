/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    // var tmp = null;      //每次迭代，tmp和newhead都后移
    // var newHead = null;
    // while (head !== null) {
    //     tmp = head;           //保存该反转节点
    //     head = head.next;     //头节点后移->继续反转下一个节点
    //     tmp.next = newHead;  //反转的节点指向newhead
    //     newHead = tmp;       //newhead后移到tmp
    // }
    // return newHead;

//三指针
    if(head===null){
        return head;
    }
    var p1=head;           //预指向头结点
    var p2=head.next;     //反转的节点-（头的后续节点）
    var tem=null;         //临时节点-（用于存储反转节点的后续节点，方便后面节点的继续反转）

    while(p2!=null){
        tem=p2.next;   //存储反转节点的后续节点
        p2.next=p1;    //反转，本指向后面的，现指向前面的
        p1=p2;         //头节点后移
        p2=tem;        //反转节点后移->继续反转下一个节点
    }
    head.next=null;   //令头结点指向空
    return p1;       //p1新头
    };

// @lc code=end


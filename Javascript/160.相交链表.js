/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA==null || headB==null){
        return null;
    }
    var pA=headA;
    var pB=headB;
    while(pA!=pB){     //PA=PB时即相遇为交叉节点
       pA=pA==null?headB:pA.next; //遍历到最后一个节点时，指向另一条链表形成一个环
       pB=pB== null? headA : pB.next;  
    } 
    return pA;     //两环相交点即为交叉点，有交叉两个指针在某一个时刻即能相遇
};
// @lc code=end


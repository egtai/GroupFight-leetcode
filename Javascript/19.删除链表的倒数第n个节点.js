/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var pre=new ListNode(0);   //预指针
    pre.next=head;            //预指针指向偷指针
    var start=pre;           //前指针
    var end=pre;            //后指针
    while(n!=0){                    //移动前指针n步。即距离end n步
       start=start.next;
       n--
    }
    
    //这里start.next!=null 是因为要删一个节点必须必须移动到前一个才能删除
    while(start.next!=null){      //同时移动start,end-当star到达链表尾部时，end指向被删除元素
           end=end.next;
           start=start.next;
    }
    end.next=end.next.next;
    return pre.next;  //不返回head，因为它也可能是被删除的选项
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
//直接法：
var deleteDuplicates = function(head) {
    var cur=head; //自指定cur指针指向指针的头部
    while(cur &&cur.next){
        if(cur.val==cur.next.val){
            cur.next=cur.next.next; //跳过相同的，指向后面
        }else{
            cur=cur.next; //不相等则将cur移动到下一个位置
        }
    }
    return head;
};
// @lc code=end


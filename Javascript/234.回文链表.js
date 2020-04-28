/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
var isPalindrome = function(head) {
    //链表变数组然后遍历数组来判断
    var ans=[];
    while(head){
        var temp=head.val;
        ans.push(temp);
        head=head.next;
    }
     var len=ans.length;
    for(var i=0;i<len;i++){
        if(ans[i]!==ans[len-1-i]){
            return false;
        }
    }
    return true;
};
// @lc code=end


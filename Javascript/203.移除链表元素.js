/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
/*
删除节点的步骤：
1.找到该节点的前一个节点
2.进行删除（跳过要删除节点）
删除头节点因为无更前的节点了，所以需要接一个虚拟接地在最前面
*/
var removeElements = function(head, val) {
    var xuliNode=new ListNode(val-1);// 通过以上构造函数创建一个虚拟节点（实例对象）
    xuliNode.next=head; //虚拟的节点指向头节点防止其被删除
    var prev=xuliNode;  //活动指针用于，寻找
    while(prev.next!=null){ //头节点不为空。
          if(prev.next.val==val){
              prev.next=prev.next.next; //当前节点被删除，被其后节点接上
          }else{
              prev=prev.next;   //往下寻找
          }
    }
    return xuliNode.next;

};
// @lc code=end


/*
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (50.12%)
 * Total Accepted:    437.9K
 * Total Submissions: 873.6K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// ====== test data ====== //
function ListNode(val) {
  this.val = val
  this.next = null
}
let head = new ListNode(1)
let end = head;
for (let i = 2; i < 6; i++) {
  let next = new ListNode(i)
  end.next = next
  end = next
}
// ====== test data ====== //
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let pre = null
  let current = head
  while (current) {
    let temp = current.next
    current.next = pre
    pre = current
    current = temp
  }
  return pre
}

console.log(JSON.stringify(reverseList(head)))

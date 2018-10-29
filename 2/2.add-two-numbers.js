/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (29.33%)
 * Total Accepted:    628.7K
 * Total Submissions: 2.1M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
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
function listdata(length) {
  let head = new ListNode(1)
  let end = head;
  for (let i = 6; i < length+6; i++) {
    let next = new ListNode(i)
    end.next = next
    end = next
  }
  return head
}
let l1 = listdata(3)
let l2 = listdata(3)

// ====== test data ====== //
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let current1 = l1
  let current2 = l2
  let node = null
  let head = null
  let flownum = 0
  while(current1 || current2) {
      let val = (current1 ? current1.val : 0) + (current2 ? current2.val : 0) + flownum
      let temp = node
      flownum = val > 10 ? 1 : 0
      node = new ListNode(val % 10)

      if(temp) {
          temp.next = node
      } else {
          head = node
      }

      current1 = current1 ? current1.next : null
      current2 = current2 ? current2.next : null

      if (!current1 && !current2 && flownum > 0) {
        node.next = new ListNode(flownum)
      }
  }
  return head
};
addTwoNumbers(l1,l2)

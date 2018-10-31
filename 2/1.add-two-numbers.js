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
function toString(head) {
  let node = head
  let str = ''
  while(node) {
    str = node.val + str
    node = node.next
  }
  return str
}
/**
 * not pass !!!
 * Not pass when nodelist is too long
 */ 
var addTwoNumbers = function(l1, l2) {
  let str1 = toString(l1)
  let str2 = toString(l2)
  console.log(str1, str2)
  let result = (Number(str1) + Number(str2)) + ''
  let arr = result.split('');
  let head = new ListNode(Number(arr.pop()))
  let temp = head
  while (arr.length) {
    temp.next = new ListNode(Number(arr.pop()))
    temp = temp.next
  }
  return head
};

addTwoNumbers(l1,l2)

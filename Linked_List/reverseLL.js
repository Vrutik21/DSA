// 206. Reverse Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// TC - O(n)
// SC - O(1)
// Iterative solution
var reverseList = function (head) {
  let prev = null;

  while (head) {
    let next = head.next;

    head.next = prev;
    prev = head;

    head = next;
  }

  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// TC - O(n)
// SC - O(n)
// Recursive solution
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};

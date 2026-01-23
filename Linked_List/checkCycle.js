// 141. Linked List Cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Approach 1 - using Hash set
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// TC - O(n)
// SC - O(n)
var hasCycle = function (head) {
  let uniqueNodes = new Set();

  let curr = head;
  while (curr) {
    if (uniqueNodes.has(curr)) return true;
    uniqueNodes.add(curr);
    curr = curr.next;
  }

  return false;
};

// Approach 2 - using Floyd's cycle finding algorithm (Slow and fast pointers)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
var hasCycle = function (head) {
  let slow = (fast = head);

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }

  return false;
};

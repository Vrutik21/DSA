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
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

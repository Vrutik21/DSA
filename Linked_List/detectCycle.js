// 142. Linked List Cycle II

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
// TC - O(n)
// SC - O(1)
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  // Detect cycle
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      let entry = head;

      // find cycle start
      // One pointer from head
      // One pointer from meeting point
      // Both walking 1 step at a time
      // They meet exactly at cycle start
      while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
      }

      return entry;
    }
  }

  return null;
};

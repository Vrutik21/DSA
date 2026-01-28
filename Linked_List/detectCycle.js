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
var detectCycle = function (head) {
  let slow = (fast = head);

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) console.log(slow, fast);
  }

  return null;
};

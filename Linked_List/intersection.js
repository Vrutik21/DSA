/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let hash = new Set();

  while (headB) {
    hash.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (hash.has(headA)) return headA;
    headA = headA.next;
  }

  return null;
};

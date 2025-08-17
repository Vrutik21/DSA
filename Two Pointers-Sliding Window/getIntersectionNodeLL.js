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
var getIntersectionNode1 = function (headA, headB) {
  let n = 0;
  let pA = headA;

  while (pA) {
    ++n;
    pA = pA.next;
  }

  let m = 0;
  let pB = headB;

  while (pB) {
    ++m;
    pB = pB.next;
  }

  const diff = Math.abs(n - m);

  // Let's make first list smaller and second larger
  if (n > m) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }

  // Moving the head of the headB to the same as headA
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  while (headA != headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

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
  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    // Start the pointer from another list head if it reaches null or continue with next
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};

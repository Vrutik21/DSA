// 160. Intersection of Two Linked Lists

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
var getIntersectionNode2 = function (headA, headB) {
  // Using Two pointers to save extra space
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
// TC - O(m + n)
// SC - O(1)
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

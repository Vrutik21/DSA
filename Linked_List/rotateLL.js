/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;
  let curr = head;
  let n = 1;

  while (curr.next) {
    curr = curr.next;
    n++;
  }

  k = k % n;
  if (k === 0) return head;

  let slow = (fast = head);

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  let newHead = slow.next;
  slow.next = null;
  fast.next = head;

  return newHead;
};

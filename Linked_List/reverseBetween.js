// 92. Reverse Linked List II

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// TC - O(n) (one pass to reach left, then right-left operations)
// SC - O(1)
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;

  const dummy = new ListNode();
  dummy.next = head;

  // prev will end up at node before `left`
  let prev = dummy;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // Reverse by "head insertion"
  // start = first node of sublist (will become tail after reverse)
  // [1,2,3,4,5] left = 2, right = 4
  let start = prev.next; // 2
  let then = start.next; // 3

  for (let i = 0; i < right - left; i++) {
    start.next = then.next; // 2.next = 4
    then.next = prev.next; // 3.next = 2
    prev.next = then; // 1.next = 3
    then = start.next; // then = 4
  }

  return dummy.next;
};

// 19. Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// TC - O(n)
// SC - O(1)
// Pattern : Two Pointers on a Linked List.
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0, head);

  let slow: ListNode = dummy;
  let fast: ListNode | null = dummy;

  // Move fast n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return head;
    }

    fast = fast.next;
  }

  // Move both pointers until fast reaches the last node
  while (fast?.next) {
    slow = slow.next!;
    fast = fast.next;
  }

  // Remove the nth node from the end
  if (slow.next) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}

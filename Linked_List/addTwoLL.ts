// 2. Add Two Numbers

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

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// TC: O(max(m, n))
// SC: O(max(m, n)) including the output list
// Auxiliary SC: O(1)
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;

  // Dummy node simplifies building the result list
  const dummy = new ListNode(0);
  let current = dummy;

  // Continue while either list has nodes or a carry remains
  while (l1 || l2 || carry) {
    let sum = carry;

    // Add digit from first list
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    // Add digit from second list
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    // Current digit goes into the result
    const digit = sum % 10;

    // Carry goes to the next addition
    carry = Math.floor(sum / 10);

    // Add the new digit to the result list
    current.next = new ListNode(digit);
    current = current.next;
  }

  return dummy.next;
}

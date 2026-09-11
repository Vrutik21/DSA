// 445. Add Two Numbers II

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

// TC: O(m + n)
// Auxiliary SC: O(m + n)
// Output SC: O(max(m, n))
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const stack1: number[] = [];
  const stack2: number[] = [];

  let carry = 0;
  let result: ListNode | null = null;

  // Store all digits so we can process them backwards
  while (l1 || l2) {
    if (l1) {
      stack1.push(l1.val);
      l1 = l1.next;
    }

    if (l2) {
      stack2.push(l2.val);
      l2 = l2.next;
    }
  }

  // Add digits from right to left
  while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
    let sum = carry;

    if (stack1.length > 0) {
      sum += stack1.pop()!;
    }

    if (stack2.length > 0) {
      sum += stack2.pop()!;
    }

    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    // Add new node to the front of the result
    const current = new ListNode(digit);
    current.next = result;
    result = current;
  }

  return result;
}

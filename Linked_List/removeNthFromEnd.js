/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Solution 1 - Two pass
  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;

  let length = 0;

  while (head && head.next) {
    head = head.next;
    length++;
  }

  const pos = length - n + 1;

  for (let i = 0; i <= pos; i++) {
    if (i === pos) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentinel.next;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Solution 2 - One pass
  let sentinel = new ListNode();
  sentinel.next = head;

  //   initializing the slow and fast pointers
  let slow = (fast = sentinel);

  //   moving the fast pointer ahead by n
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  //   move both pointer until fast is the last element
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  //   deleting the slow.next element
  slow.next = slow.next.next;

  return sentinel.next;
};

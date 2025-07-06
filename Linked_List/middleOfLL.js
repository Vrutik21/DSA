/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = (fast = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const list = {
  head: {
    val: 6,
    next: {
      val: 10,
      next: {
        val: 12,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
};

console.log(middleNode(list.head));

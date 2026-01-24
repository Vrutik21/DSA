// 206. Reverse Linked List

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
// TC - O(n)
// SC - O(1)
var reverseList = function (head) {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

console.log(reverseList(list.head));

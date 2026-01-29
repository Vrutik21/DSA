// 143. Reorder List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
//  TC - O(n)
// SC - O(1)
var reorderList = function (head) {
  if (!head || !head.next) return;

  let slow = head;
  let fast = head;

  //   Find middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //   Reverse second half starting at slow.next
  let second = slow.next;
  slow.next = null; // cut the first half
  let prev = null;
  while (second) {
    let next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  let firstHead = head;
  // prev is head of reversed second half
  let secondHead = prev;

  //   Merge two halves alternately
  while (secondHead) {
    let t1 = firstHead.next;
    let t2 = secondHead.next;

    firstHead.next = secondHead;
    secondHead.next = t1;

    firstHead = t1;
    secondHead = t2;
  }
};

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
// TC - O(n)
// SC - O(1)
var reorderList = function (head) {
  if (!head || !head.next) return;

  let slow = head;
  let fast = head;

  // Use slow/fast pointers to reach the middle.
  // slow moves 1 step, fast moves 2 steps.
  // When fast finishes, slow is around the middle.
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;
  let prev = null;

  // Reverse the second list
  while (second) {
    let next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  let firstHead = head;
  let secondHead = prev;

  //   Merge the two lists alternatively
  while (secondHead) {
    let t1 = firstHead.next;
    let t2 = secondHead.next;

    firstHead.next = secondHead;
    secondHead.next = t1;

    firstHead = t1;
    secondHead = t2;
  }
};

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

  // Use slow/fast pointers to reach the middle.
  // slow moves 1 step, fast moves 2 steps.
  // When fast finishes, slow is around the middle.
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // second will point to the start of the second half.
  // Cut the list into two separate halves:
  // first half: head -> ... -> slow
  // second half: second -> ...
  let second = slow.next;
  slow.next = null; // cut the first half or else there will be a cycle
  let prev = null;

  // Reverse the second half so we can attach nodes from the end
  while (second) {
    let next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  // current node in first half
  let firstHead = head;
  // current node in reversed second half
  let secondHead = prev;

  // Merge both halves alternately:
  // first node from first half,
  // then first node from reversed second half,
  // then next from first half, and so on.
  while (secondHead) {
    let t1 = firstHead.next; // store next node of first half
    let t2 = secondHead.next; // store next node of second half

    firstHead.next = secondHead; // link first half node to second half node
    secondHead.next = t1; // link second half node back to first half

    // Move both pointers forward
    firstHead = t1;
    secondHead = t2;
  }
};

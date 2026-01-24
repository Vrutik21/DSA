// 23. Merge k Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// naive “scan k heads” approach
// TC - O(N * k)
// SC - O(1)
var mergeKLists = function (lists) {
  let sentinel = new ListNode();
  let curr = sentinel;

  //  Keep looping until all lists are exhausted
  while (true) {
    let minNode = null; // Will store the smallest head node
    let minIdx = -1; // Index of the list where minNode comes from

    // Scan all list heads to find the smallest value
    for (let j = 0; j < lists.length; j++) {
      let currNode = lists[j];

      // Only consider non-null list heads
      if (currNode) {
        if (minNode === null || currNode.val < minNode.val) {
          minNode = currNode;
          minIdx = j;
        }
      }
    }

    // If all lists were null, we are done
    if (minIdx === -1) break;

    // Save the next node from the selected list
    let next = minNode.next;

    // Detach minNode from its original list
    minNode.next = null;

    // Append minNode to the merged list
    curr.next = minNode;
    curr = curr.next;

    // Advance only the list from which minNode was taken
    lists[minIdx] = next;
  }

  return sentinel.next;
};

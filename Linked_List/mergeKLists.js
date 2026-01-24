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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Divide & Conquer non-recursive approach
// TC - O(N * logk)
// SC - O(1)
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  // Interval represents how far apart lists are merged
  let interval = 1;

  // Keep merging until only one list remains
  while (interval < lists.length) {
    for (let i = 0; i + interval < lists.length; i += interval * 2) {
      lists[i] = mergeTwoLL(lists[i], lists[i + interval]);
    }

    interval *= 2; // Double the merge range
  }

  // The fully merged list is stored at index 0
  return lists[0];
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Divide & Conquer recursive approach
// TC - O(N * logk)
// SC - O(log k) recursion call stack
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  return mergeRange(lists, 0, lists.length - 1);
};

function mergeRange(lists, left, right) {
  if (left === right) return lists[left];

  const mid = left + Math.floor((right - left) / 2);

  let leftHalfMerged = mergeRange(lists, left, mid);
  let rightHalfMerged = mergeRange(lists, mid + 1, right);

  return mergeTwoLL(leftHalfMerged, rightHalfMerged);
}

// Helper function
function mergeTwoLL(list1, list2) {
  let sentinel = new ListNode();
  let prev = sentinel;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }

  prev.next = list1 || list2;

  return sentinel.next;
}

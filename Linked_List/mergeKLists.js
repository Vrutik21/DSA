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

// Iterative Divide & Conquer approach
// TC - O(N log k), where N is total number of nodes
// SC - O(1) extra space
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  let interval = 1;

  // Keep increasing the group size: 1, 2, 4, 8...
  while (interval < lists.length) {
    // Merge pairs: (0,1), (2,3), (4,5) for interval = 1
    // Then (0,2), (4,6) for interval = 2, and so on
    for (let i = 0; i + interval < lists.length; i += interval * 2) {
      lists[i] = mergeTwoLL(lists[i], lists[i + interval]);
    }

    interval *= 2;
  }

  return lists[0];
};

// Divide & Conquer recursive approach, and it works like merge sort
// TC - O(N log k), where N is total number of nodes
// SC - O(log k) for recursion stack
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

  // Merge both lists in sorted order
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

  // Attach the remaining part of the non-empty list
  prev.next = list1 || list2;

  return sentinel.next;
}

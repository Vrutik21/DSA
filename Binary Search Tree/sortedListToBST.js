// 109. Convert Sorted List to BST

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// My solution - converting the list into array to solve it using root,left,right (pre-order)
// TC - O(n)
// SC - O(n) - This sol takes O(n) space coz of the []
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let nums = [];

  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  function buildBST(left, right) {
    if (left > right) return null;

    const mid = left + Math.floor((right - left) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = buildBST(left, mid - 1);
    root.right = buildBST(mid + 1, right);

    return root;
  }

  return buildBST(0, nums.length - 1);
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// TC - O(n)
// SC - O(log n) tree is balanced, recursion depth is about log n
var sortedListToBST = function (head) {
  // Find length of linked list
  let curr = head;
  let n = 0;

  while (curr) {
    n++;
    curr = curr.next;
  }

  function buildBST(left, right) {
    // No nodes in this range
    if (left > right) return null;

    const mid = left + Math.floor((right - left) / 2);

    // Build left subtree first
    const leftSubtree = buildBST(left, mid - 1);

    // Current linked list node becomes root
    const root = new TreeNode(head.val);

    // Move list pointer forward
    head = head.next;

    // Attach left subtree
    root.left = leftSubtree;

    // Build right subtree
    root.right = buildBST(mid + 1, right);

    return root;
  }

  return buildBST(0, n - 1);
};

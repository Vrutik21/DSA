// 99. Recover Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// TC - O(n)
// SC - O(n)
// Key Idea: Identify two swapped nodes in a BST by detecting order violations during an in-order traversal.

// Future Suggestion: Morris inorder technique can be implemented to achieve O(1) space but that is too complex and not easy to come up in interviews
var recoverTree = function (root) {
  let first = null;
  let second = null;
  let prev = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    // detect violation
    if (prev && prev.val > node.val) {
      if (!first) first = prev; // first time we see a drop
      second = node; // always update second
    }

    prev = node;
    inorder(node.right);
  }

  inorder(root);

  // swap the wrong nodes' values
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};

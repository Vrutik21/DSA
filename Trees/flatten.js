// 114. Flatten Binary Tree to Linked List

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
var flatten = function (root) {
  if (!root) return;

  let stack = [root];

  while (stack.length) {
    const curr = stack.pop();

    // Push right first so left is processed first
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);

    // The next node in preorder is on top of stack
    curr.left = null;
    curr.right = stack.length ? stack[stack.length - 1] : null;
  }
};

// Without using extra memory
// TC - O(n)
// SC - O(1)
var flatten = function (root) {
  if (!root) return;

  let curr = root;

  while (curr) {
    if (curr.left) {
      // Find the rightmost node of left subtree
      let prev = curr.left;

      while (prev.right) {
        prev = prev.right;
      }

      // Stitch: right subtree goes to the rightmost of left subtree
      prev.right = curr.right;

      // Move left subtree to right
      curr.right = curr.left;
      curr.left = null;
    }

    // Move forward in the "list"
    curr = curr.right;
  }
};

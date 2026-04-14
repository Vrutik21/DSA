// 98. Validate Binary Search Tree

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
 * @return {boolean}
 */
// Recursive solution
// TC - O(n)
// SC - O(h)
var isValidBST1 = function (root) {
  function checkBST(curr, low, high) {
    // Empty tree/subtree is valid
    if (!curr) return true;

    // Current node must stay strictly inside the valid range
    if (
      (high !== null && curr.val >= high) ||
      (low !== null && curr.val <= low)
    ) {
      return false;
    }

    // Left subtree: values must be < curr.val
    // Right subtree: values must be > curr.val
    return (
      checkBST(curr.left, low, curr.val) && checkBST(curr.right, curr.val, high)
    );
  }

  return checkBST(root, null, null);
};

// Iterative solution
// Inorder traversal of a BST should be strictly increasing
// Left -> Node -> Right
// TC - O(n)
// SC - O(h)
var isValidBST = function (root) {
  let stack = [];
  let curr = root;
  let prev = null;

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();

    if (prev !== null && curr.val <= prev) {
      return false;
    }

    prev = curr.val;

    curr = curr.right;
  }

  return true;
};

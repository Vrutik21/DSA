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
  function checkBST(node, low, high) {
    // An empty tree is valid.
    if (node === null) {
      return true;
    }

    // The node must be strictly between low and high.
    if (
      (low !== null && node.val <= low) ||
      (high !== null && node.val >= high)
    ) {
      return false;
    }

    // Left subtree values must be smaller than node.val.
    // Right subtree values must be greater than node.val.
    return (
      checkBST(node.left, low, node.val) && checkBST(node.right, node.val, high)
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
  const stack = [];
  let current = root;
  let previousValue = null;

  while (current !== null || stack.length > 0) {
    // Go as far left as possible.
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // Process the next node in inorder traversal.
    current = stack.pop();

    // Values must be strictly increasing.
    if (previousValue !== null && current.val <= previousValue) {
      return false;
    }

    previousValue = current.val;

    // Continue with the right subtree.
    current = current.right;
  }

  return true;
};

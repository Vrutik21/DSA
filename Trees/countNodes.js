// 222. Count Complete Tree Nodes

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
 * @return {number}
 */
// Divide & Conquer approach
// TC - O((logn)^2)
// SC - O(logn)
var countNodes = function (root) {
  if (!root) return 0;

  let leftHeight = 0;
  let rightHeight = 0;

  let leftCurr = root;
  let rightCurr = root;

  // Compute leftmost height
  while (leftCurr) {
    leftHeight++;
    leftCurr = leftCurr.left;
  }

  //  Compute rightmost height
  while (rightCurr) {
    rightHeight++;
    rightCurr = rightCurr.right;
  }

  // If both heights are equal,
  // this subtree is a perfect binary tree
  // Number of nodes = 2^h - 1
  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  }

  // Otherwise, subtree is complete but not perfect.
  // One side will be perfect and return immediately,
  // while the other side continues recursion.
  return 1 + countNodes(root.left) + countNodes(root.right);
};

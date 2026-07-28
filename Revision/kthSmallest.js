// 230. Kth Smallest Element in a BST

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
 * @param {number} k
 * @return {number}
 */
// TC - O(n)
// SC - O(h)
// Inorder traversal - Left -> Root -> Right
var kthSmallest = function (root, k) {
  let ans = null;
  let count = k;

  function traversal(curr) {
    if (!curr || ans !== null) return;

    traversal(curr.left);

    // The answer may have been found in the left subtree
    if (ans !== null) return;

    count--;

    if (count === 0) {
      ans = curr.val;
      return;
    }

    traversal(curr.right);
  }

  traversal(root);

  return ans;
};

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
var kthSmallest = function (root, k) {
  let ans = null;
  let count = k;

  //   left -> root -> right
  function traversal(curr) {
    if (!curr || ans) return;

    traversal(curr.left);
    --count;
    if (count === 0) {
      ans = curr.val;
    }
    traversal(curr.right);
  }

  traversal(root);

  return ans;
};

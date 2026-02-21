// 124. Binary Tree Maximum Path Sum

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
// TC - O(n)
// SC - O(n)
var maxPathSum = function (root) {
  let best = -Infinity;

  function checkMax(curr) {
    if (!curr) return 0;

    let leftMax = Math.max(0, checkMax(curr.left));
    let rightMax = Math.max(0, checkMax(curr.right));

    let currMax = curr.val + Math.max(leftMax, rightMax);

    best = Math.max(best, curr.val + leftMax + rightMax);

    return currMax;
  }

  checkMax(root);

  return best;
};

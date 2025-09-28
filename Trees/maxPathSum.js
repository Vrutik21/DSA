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
var maxPathSum = function (root) {
  let maxPathSum = -Infinity;

  function checkMax(curr) {
    if (!curr) return 0;

    let leftMax = Math.max(0, checkMax(curr.left));
    let rightMax = Math.max(0, checkMax(curr.right));

    let currMax = curr.val + Math.max(leftMax, rightMax);

    maxPathSum = Math.max(maxPathSum, curr.val + leftMax + rightMax);

    return currMax;
  }

  checkMax(root);

  return maxPathSum;
};

// 113. Path Sum II

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
 * @param {number} targetSum
 * @return {number[][]}
 */
// TC - O(n)
// SC - O(n)
var pathSum = function (root, targetSum) {
  if (!root) return [];

  let result = [];

  function dfs(node, currentSum, path) {
    if (!node) return;

    // Add current node to path
    path.push(node.val);
    currentSum += node.val;

    // Check if it's a leaf and sum matches
    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...path]); // copy of path
    }

    // Traverse left and right
    dfs(node.left, currentSum, path);
    dfs(node.right, currentSum, path);

    // Backtrack
    path.pop();
  }

  dfs(root, 0, []);

  return result;
};

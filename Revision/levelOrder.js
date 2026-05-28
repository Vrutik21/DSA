// 102. Binary Tree Level Order Traversal

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
 * @return {number[][]}
 */
// DFS
// TC - O(n)
// SC - O(n)
var levelOrder = function (root) {
  if (!root) return null;

  let ans = [];

  function traversal(curr, level) {
    if (!ans[level]) ans[level] = [];

    ans[level].push(curr.val);

    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  }

  traversal(root, 0);

  return ans;
};

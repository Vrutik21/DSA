// 107. Binary Tree Level Order Traversal II

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
// TC - O(n)
// SC - O(n)
var levelOrderBottom = function (root) {
  if (!root) return [];

  let ans = [];

  function traversal(curr, level) {
    // first time reaching this level then create a bucket at the FRONT
    if (level === ans.length) ans.unshift([]);

    // map level to correct index because we used unshift
    let idx = ans.length - level - 1;
    ans[idx].push(curr.val);

    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  }

  traversal(root, 0);

  return ans;
};

// 199. Binary Tree Right Side View

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
 * @return {number[]}
 */
// DFS recursion
// TC - O(n)
// SC - O(h) auxiliary space for recursion stack, where h is the height of the tree.
var rightSideView = function (root) {
  let ans = [];

  function traversal(curr, level) {
    if (!curr) return;

    // First node visited at this level is visible from right side
    if (ans.length === level) {
      ans.push(curr.val);
    }

    // Visit right first so rightmost node is seen first
    traversal(curr.right, level + 1);
    traversal(curr.left, level + 1);
  }

  traversal(root, 0);

  return ans;
};

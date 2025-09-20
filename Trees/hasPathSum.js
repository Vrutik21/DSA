// 112

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
 * @return {boolean}
 */
// My approach
var hasPathSum1 = function (root, targetSum) {
  if (!root) return false;

  function traversal(root, currSum) {
    if (!root.left && !root.right) {
      if (currSum === targetSum) return true;
    }

    if (root.left && traversal(root.left, currSum + root.left.val)) return true;
    if (root.right && traversal(root.right, currSum + root.right.val))
      return true;

    return false;
  }

  return traversal(root, root.val);
};

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
 * @return {boolean}
 */
// Akshay's approach
var hasPathSum2 = function (root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

// ChatGPT code
var hasPathSum = function (root, targetSum) {
  function dfs(node, remain) {
    if (!node) return false;
    if (!node.left && !node.right) return remain === node.val;
    const next = remain - node.val;
    return dfs(node.left, next) || dfs(node.right, next);
  }
  return dfs(root, targetSum);
};

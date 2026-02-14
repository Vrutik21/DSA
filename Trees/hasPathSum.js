// 112. Path Sum

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
  let ans = false;

  function traversal(curr, sum) {
    if (curr.val + sum === targetSum && !curr.left && !curr.right) {
      ans = true;
      return;
    }

    curr.left && traversal(curr.left, curr.val + sum);
    curr.right && traversal(curr.right, curr.val + sum);
  }

  traversal(root, 0);

  return ans;
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

// more clean code
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  // If it's a leaf, check if the remaining sum equals this node's value
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  const remaining = targetSum - root.val;

  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};

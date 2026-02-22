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
// TC - O(n)
// SC - O(n)
// My solution using recursive level order traversal
var rightSideView1 = function (root) {
  if (!root) return [];

  let ans = [];

  function traversal(curr, level) {
    if (!curr) return;

    if (ans.length === level) {
      ans.push(curr.val);
    }

    traversal(curr.right, level + 1);
    traversal(curr.left, level + 1);
  }

  traversal(root, 0);

  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// TC - O(n)
// SC - O(n)
// Akshay's solution using iterative level order traversal
var rightSideView = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];

  while (q.length) {
    levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      //   Only push the right most which comes at 0th pos since we reversed the traversal
      i == 0 && ans.push(curr.val);

      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
    }
  }

  return ans;
};

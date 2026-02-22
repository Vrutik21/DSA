// 129. Sum Root to Leaf Numbers

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
var sumNumbers = function (root) {
  if (!root) return 0;

  function traversal(curr, prevNum) {
    if (!curr) return 0;

    const newNum = prevNum * 10 + curr.val;

    if (!curr.left && !curr.right) return newNum;

    return traversal(curr.left, newNum) + traversal(curr.right, newNum);
  }

  return traversal(root, 0);
};

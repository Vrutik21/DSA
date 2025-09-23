// 110 Balanced Binary Tree

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let ans = true;

  function calcHeight(curr) {
    if (!curr) return 0;

    let left = calcHeight(curr.left);
    let right = calcHeight(curr.right);

    if (Math.abs(left - right) > 1) {
      ans = false;
    }
    return 1 + Math.max(left, right);
  }

  calcHeight(root);

  return ans;
};

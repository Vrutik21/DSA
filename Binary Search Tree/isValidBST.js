// 98. Validate Binary Search Tree

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
var isValidBST = function (root) {
  function checkBST(curr, low, high) {
    if (!curr) return true;

    if (
      (high != null && curr.val >= high) ||
      (low != null && curr.val <= low)
    ) {
      return false;
    }

    let checkLeft = checkBST(curr.left, low, curr.val);
    let checkRight = checkBST(curr.right, curr.val, high);

    return checkLeft && checkRight;
  }

  return checkBST(root, null, null);
};

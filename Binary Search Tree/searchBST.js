// 700. Search in a Binary Search Tree

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST1 = function (root, val) {
  let ans = null;

  function traveral(curr, val) {
    if (!curr) return;

    if (curr.val === val) {
      ans = curr;
    }

    if (curr.val > val) {
      traveral(curr.left, val);
    } else {
      traveral(curr.right, val);
    }
  }

  traveral(root, val);

  return ans;
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// Less code and same logic
var searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  return root.val < val
    ? searchBST(root.right, val)
    : searchBST(root.left, val);
};

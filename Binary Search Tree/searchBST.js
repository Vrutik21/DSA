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
// TC - O(h)
// SC - O(h)
var searchBST1 = function (root, val) {
  let ans = null;

  function traversal(curr, val) {
    if (!curr) return;

    if (curr.val === val) {
      ans = curr;
      return;
    }

    if (curr.val > val) {
      traversal(curr.left, val);
    } else {
      traversal(curr.right, val);
    }
  }

  traversal(root, val);

  return ans;
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// Less code and same logic
// TC - O(h)
// SC - O(h)
var searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  return root.val < val
    ? searchBST(root.right, val)
    : searchBST(root.left, val);
};

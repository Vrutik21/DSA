// 235. Lowest Common Ancestor of a Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// My solution
// TC - O(log n)
// Top-down approach
var lowestCommonAncestor1 = function (root, p, q) {
  let lca = null;

  function traversal(curr) {
    if (!curr || lca) return;

    if (p.val < curr.val && q.val < curr.val) {
      traversal(curr.left);
    } else if (p.val > curr.val && q.val > curr.val) {
      traversal(curr.right);
    } else {
      lca = curr;
    }
  }

  traversal(root);
  return lca;
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Akshay's solution
// TC - O(log n)
// Bottom-up approach
var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

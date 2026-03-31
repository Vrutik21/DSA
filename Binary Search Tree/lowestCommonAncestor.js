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
// TC - O(h)
// SC - O(h)
// Bottom-up approach
var lowestCommonAncestor2 = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

// Iterative solution
// TC - O(n)
// SC - O(1)
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;

  while (curr) {
    // If both p and q are smaller, LCA must be in left subtree
    if (curr.val > p.val && curr.val > q.val) {
      curr = curr.left;
    }
    // If both p and q are greater, LCA must be in right subtree
    else if (curr.val < p.val && curr.val < q.val) {
      curr = curr.right;
    }
    // Otherwise, current node is the split point
    // So this is the lowest common ancestor
    else {
      return curr;
    }
  }

  return null;
};

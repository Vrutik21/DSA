// 543. Diameter of Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
Definition:
Diameter = number of EDGES in the longest path between any two nodes in the tree.

Important:
- The path does NOT have to pass through the root.
- We measure diameter in EDGES (not nodes).

Key Idea:
At every node:
    diameter passing through that node =
        height(left subtree) + height(right subtree)

Because:
- Longest path through current node
  goes down to deepest node on left
  and deepest node on right.
*/

// TC - O(n)
// SC - O(n)
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  function height(curr) {
    if (!curr) return 0;

    const leftHeight = height(curr.left);
    const rightHeight = height(curr.right);

    // Possible diameter passing through current node
    // This gives number of edges
    const diameterThroughNode = leftHeight + rightHeight;

    maxDiameter = Math.max(maxDiameter, diameterThroughNode);

    /*
    Return height of current node.
    Height is counted in nodes:
        1 (current node) +
        max(height of left, height of right)
    */
    return 1 + Math.max(leftHeight, rightHeight);
  }

  // Start postorder traversal
  height(root);

  return maxDiameter;
};

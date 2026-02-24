// 124. Binary Tree Maximum Path Sum

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
/*
Definition:
Maximum Path Sum = maximum sum of values along ANY path in the tree.

Important:
- A path can start and end at ANY node.
- The path must be continuous (parent-child connections).
- You cannot "branch" upward in two directions when returning to parent.
  (Because the path sent upward must be a single chain.)

Key Idea (Postorder / bottom-up):
At each node, we consider two things:

1) "Best path that PASSES THROUGH this node (can use both sides)"
   curr.val + leftGain + rightGain
   -> This is a candidate for the global answer.

2) "Best path that can be EXTENDED to the parent (must choose one side)"
   curr.val + max(leftGain, rightGain)
   -> This is what we return to parent.

Handling negatives:
If a subtree contributes a negative sum, it will only reduce the total,
so we ignore it by using Math.max(0, subtreeGain).
*/

// TC - O(n)
// SC - O(n)
var maxPathSum = function (root) {
  let best = -Infinity;

  function checkMax(curr) {
    if (!curr) return 0;

    // Compute gains from left and right subtrees
    // If a gain is negative, ignore it (take 0 instead)
    let leftMax = Math.max(0, checkMax(curr.left));
    let rightMax = Math.max(0, checkMax(curr.right));

    // Best path sum that passes through current node and can use BOTH sides
    const pathThroughCurr = curr.val + leftGain + rightGain;

    // Update global best answer
    best = Math.max(best, pathThroughCurr);

    // Return the best gain that can be extended to parent (ONLY one side)
    return curr.val + Math.max(leftGain, rightGain);
  }

  checkMax(root);

  return best;
};

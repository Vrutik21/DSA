// 543. Diameter of Binary Tree

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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  function height(node) {
    if (!node) return 0;

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    // update max diameter at this node
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // return height of this subtree
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return maxDiameter;
};

// 111. Minimum Depth of Binary Tree

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
// BFS solution
// This is more optimal as it breaks if null child is found
var minDepth = function (root) {
  if (!root) return 0;

  let queue = [[root, 1]]; // [node, depth]

  while (queue.length > 0) {
    let [node, depth] = queue.shift();

    // If leaf node then return immediately
    if (!node.left && !node.right) {
      return depth;
    }

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
};

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
// DFS solution - Bottom up approach
// Recursive solution
var minDepth = function (root) {
  if (!root) return 0;

  // If left is null, go right
  if (!root.left) return 1 + minDepth(root.right);

  // If right is null, go left
  if (!root.right) return 1 + minDepth(root.left);

  // If both children exist
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

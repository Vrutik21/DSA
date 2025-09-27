// 1448. Count Good Nodes in Binary Tree

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
// My solution by taking maximum as we go top-down recursion
var goodNodes = function (root) {
  let ans = 0;

  function traversal(curr, maxVal) {
    // Logic is above the traversal so it's a top-down recursion
    if (!curr) return;

    if (curr.val >= maxVal) {
      ans++;
      maxVal = curr.val;
    }

    curr.left && traversal(curr.left, maxVal);
    curr.right && traversal(curr.right, maxVal);
  }
  traversal(root, root.val);
  return ans;
};

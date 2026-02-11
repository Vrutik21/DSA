// 94. Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
// Recursive method
// TC - O(n)
// SC - O(n)
var inorderTraversal1 = function (root) {
  //   left -> root -> right
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }

  traversal(root);

  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Iterative method
// TC - O(n)
// SC - O(n)
var inorderTraversal = function (root) {
  //   left -> root -> right
  let ans = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }

  return ans;
};

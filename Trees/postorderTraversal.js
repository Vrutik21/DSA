// 145 Binary Tree Postorder Traversal

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
var postorderTraversal = function (root) {
  //   left -> right -> root
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }

  traversal(root);

  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Iterative method
// Using two stacks
// TC - O(n)
// SC - O(n)
var postorderTraversal = function (root) {
  //   left -> right -> root
  if (!root) return [];

  let ans = [];
  // using stack 1 to store the children of the last visited node
  let stack1 = [root];
  // using stack 2 to store the last visited nodes
  // We get the reverse order i.e Root -> right -> left
  let stack2 = [];

  while (stack1.length) {
    let curr = stack1.pop();
    stack2.push(curr);

    if (curr.left) stack1.push(curr.left);
    if (curr.right) stack1.push(curr.right);
  }

  while (stack2.length) {
    ans.push(stack2.pop().val);
  }

  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Iterative method
// Using one stack
// TC - O(n)
// SC - O(n)
var postorderTraversal = function (root) {
  //   left -> right -> root
  let stack = [];
  let ans = [];
  let curr = root;
  let lastVisited = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    let peek = stack[stack.length - 1];

    if (peek.right && lastVisited !== peek.right) {
      curr = peek.right;
    } else {
      ans.push(peek.val);
      lastVisited = stack.pop();
    }
  }
};

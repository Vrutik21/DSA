// 173. Binary Search Tree Iterator

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
 */
// TC - O(n) because we traverse all nodes
// SC - O(n) for storing inorder traversal array
var BSTIterator = function (root) {
  this.arr = [];
  this.index = 0;

  function inorder(node, arr) {
    if (!node) return;

    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
  }

  inorder(root, this.arr);
};

/**
 * @return {number}
 */
// TC - O(1)
BSTIterator.prototype.next = function () {
  return this.arr[this.index++];
};

/**
 * @return {boolean}
 */
// TC - O(1)
BSTIterator.prototype.hasNext = function () {
  return this.index < this.arr.length;
};

// Using a stack
// Instead of storing the entire inorder traversal beforehand, we only store the nodes needed to get the next smallest value.
// TC - O(h) Because we only push the left path from root to smallest node.
// SC - O(h) Because stack stores at most one root-to-leaf path.
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  this.pushLeft(root);
};

/**
 * Helper Function
 * Push all left nodes into stack
 * @param {TreeNode} node
 */
BSTIterator.prototype.pushLeft = function (node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * @return {number}
 */
// TC - O(1)
BSTIterator.prototype.next = function () {
  let node = this.stack.pop();

  if (node.right) {
    this.pushLeft(node.right);
  }

  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

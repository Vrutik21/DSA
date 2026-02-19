// 116. Populating Next Right Pointers in Each Node

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
// My approach using stack
// TC - O(n)
// SC - O(n)
var connect = function (root) {
  if (!root) return [];

  root.next = null;
  let stack = [root];

  while (stack.length) {
    let curr = stack.pop();

    if (curr.left) {
      curr.left.next = curr.right ? curr.right : null;
    }

    if (curr.right) {
      curr.right.next = curr.next ? curr.next.left : null;
    }

    curr.left && stack.push(curr.left);
    curr.right && stack.push(curr.right);
  }

  return root;
};

/**
 * @param {_Node} root
 * @return {_Node}
 */
// Optimal approach
// TC - O(n)
// SC - O(1)
var connect = function (root) {
  if (!root) return root;

  function traversal(curr) {
    if (curr.left) {
      curr.left.next = curr.right;
    }

    if (curr.right && curr.next) {
      curr.right.next = curr.next.left;
    }

    curr.left && traversal(curr.left);
    curr.right && traversal(curr.right);
  }

  traversal(root);

  return root;
};

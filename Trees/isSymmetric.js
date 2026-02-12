// 101 Symmetric Tree

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
 * @return {boolean}
 */
// My recursive solution
// TC - O(n)
// SC - O(n)
var isSymmetric1 = function (root) {
  function isMirror(left, right) {
    if (!left && !right) return true; // both null
    if (!left || !right) return false; // one null
    if (left.val !== right.val) return false; // values must match

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return isMirror(root.left, root.right);
};

// Iterative solution
// TC - O(n)
// SC - O(n)
var isSymmetric = function (root) {
  let queue = [root.left, root.right];

  while (queue.length) {
    let p1 = queue.shift();
    let p2 = queue.shift();

    // Continue is used because null also gets stored inside our queue
    if (!p1 && !p2) continue;
    if (!p1 || !p2) return false;
    if (p1.val !== p2.val) return false;

    queue.push(p1.left, p2.right);
    queue.push(p1.right, p2.left);
  }

  return true;
};

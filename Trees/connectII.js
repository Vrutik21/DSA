// 117. Populating Next Right Pointers in Each Node II

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
// TC - O(n)
// SC - O(n)
var connect = function (root) {
  if (!root) return root;

  let queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    let prev = null;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (prev) {
        prev.next = node;
      }

      prev = node;

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    // last node in level should point to null
    prev.next = null;
  }

  return root;
};

/**
 * @param {_Node} root
 * @return {_Node}
 */
// TC - O(n)
// SC - O(1)
var connect = function (root) {
  if (!root) return root;

  let curr = root; // head of current level

  while (curr) {
    // dummy head for the next level
    let dummy = new _Node(0);
    let tail = dummy;

    // traverse current level using next pointers
    while (curr) {
      if (curr.left) {
        tail.next = curr.left;
        tail = tail.next;
      }

      if (curr.right) {
        tail.next = curr.right;
        tail = tail.next;
      }

      curr = curr.next;
    }

    // move to next level
    curr = dummy.next;
  }

  return root;
};

// 103. Binary Tree Zigzag Level Order Traversal

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let queue = [root];
  let ans = [];
  let leftToRight = true;

  while (queue.length) {
    const size = queue.length;
    const level = new Array(size);

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();

      // place value according to direction
      const idx = leftToRight ? i : size - 1 - i; // so if rightToLeft -> i = 1 then i = 2 - 1 - 1 = 0
      level[idx] = curr.val;

      // normal BFS enqueue
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }

    ans.push(level);
    // flip for next level
    leftToRight = !leftToRight;
  }

  return ans;
};

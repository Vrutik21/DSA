// 102 Level Order Traversal

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
// Iterative way
// My way
// TC - O(n)
// SC - O(n)
var levelOrder1 = function (root) {
  if (!root) return [];

  let queue = [];
  let ans = [];
  let curr = [root, 0];

  while (curr) {
    ans[curr[1]]
      ? ans[curr[1]].push(curr[0].val)
      : (ans[curr[1]] = [curr[0].val]);

    curr && curr[0].left && queue.push([curr[0].left, curr[1] + 1]);
    curr && curr[0].right && queue.push([curr[0].right, curr[1] + 1]);

    curr = queue.shift();
  }

  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Iterative way
// Akshay's way
// TC - O(n)
// SC - O(n)
var levelOrder2 = function (root) {
  if (!root) return [];

  let queue = [root];
  let ans = [];

  while (queue.length) {
    let levelArr = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();

      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);

      levelArr.push(curr.val);
    }

    ans.push(levelArr);
  }

  return ans;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Recursive way
// TC - O(n)
// SC - O(n)
var levelOrder = function (root) {
  if (!root) return [];

  let ans = [];

  function traversal(curr, level) {
    if (!ans[level]) ans[level] = [];

    ans[level].push(curr.val);

    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  }

  traversal(root, 0);

  return ans;
};

// 652. Find Duplicate Subtrees

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
 * @return {TreeNode[]}
 */
// TC - O(n)
// SC - O(n)
var findDuplicateSubtrees = function (root) {
  let store = new Map(); // serialization -> frequency
  let result = [];

  //   DFS
  function dfs(node) {
    if (!node) return "#"; // null marker

    // postorder: left -> right -> root
    let left = dfs(node.left);
    let right = dfs(node.right);

    // create a unique serialization
    let serial = `${node.val},${left},${right}`;

    console.log(serial, "serial");

    // count occurrences
    store.set(serial, (store.get(serial) || 0) + 1);

    // if seen exactly twice, push the node
    if (store.get(serial) === 2) {
      result.push(node);
    }

    return serial;
  }

  dfs(root);
  return result;
};

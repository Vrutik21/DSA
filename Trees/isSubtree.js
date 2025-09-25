// 572. Subtree of Another Tree

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// My solution
// TC - O(n*m) as isSameTree is called multiple times for number of nodes
// SC - O(h) where h is the height of the larger tree
var isSubtree1 = function (root, subRoot) {
  // Empty subRoot is always a subtree
  if (!subRoot) return true;
  // Non-empty subRoot cannot be in an empty root
  if (!root) return false;

  // If trees match here, done; otherwise try left or right
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// Akshay's solution
// TC - O(M+N) but can be O(M*N) depending the engine
// SC - O(M+N)
var isSubtree = function (root, subRoot) {
  let hashRoot = serializeTree(root);
  let hashSubRoot = serializeTree(subRoot);

  return hashRoot.includes(hashSubRoot);
};

var serializeTree = function (root) {
  let hash = "";

  function traversal(curr) {
    if (!curr) {
      hash += "-#";
      return;
    }

    hash += "-" + curr.val;

    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);
};

// function kmpContains(text, pattern) {
//   // LPA - Longest prefix suffix
//   // Longest Proper Prefix which is also a Suffix
//   const lps = buildLPS(pattern);
// }

// function buildLPS(p) {
//   const lps = Array(p.length).fill(0);

//   let len = 0, i = 1;

//   while(i < p.length){
//     if(p[i] === p[len]){
//       lps[i] = ++len;
//       ++i;
//     }else{
//       if(len !== 0){
//         len = lps[len - 1];

//       }
//     }
//   }
// }

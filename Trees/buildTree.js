// 105. Construct Binary Tree from Preorder and Inorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// TC - O(n^2)
// SC - O(n)
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  // First element of preorder is ALWAYS the root
  // (Because preorder = Root -> Left -> Right)
  let rootVal = preorder[0];

  // Create the root node
  let root = new TreeNode(rootVal);

  // Find root in inorder array
  // (Because inorder = Left -> Root -> Right)
  let rootIndex = inorder.indexOf(rootVal);

  // Build left subtree
  // Inorder left part = everything before root
  // Preorder left part = next "rootIndex" elements after root
  root.left = buildTree(
    preorder.slice(1, rootIndex + 1), // Skip root and take left subtree elements
    inorder.slice(0, rootIndex), // Left subtree elements
  );

  // Build right subtree
  // Inorder right part = everything after root
  // Preorder right part = remaining elements after left subtree
  root.right = buildTree(
    preorder.slice(rootIndex + 1), // Remaining elements
    inorder.slice(rootIndex + 1), // Right subtree elements
  );

  return root;
};

// TC - O(n)
// SC - O(n)
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  // Build a value -> index map for inorder so we can split in O(1)
  const indexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }

  // Pointer to track current root in preorder
  let preIndex = 0;

  // Build subtree using inorder boundaries (no slicing / no extra arrays)
  function helper(inLeft, inRight) {
    // If the inorder range is empty, no node here
    if (inLeft > inRight) return null;

    // Preorder gives root first for this subtree
    const rootVal = preorder[preIndex++];
    const root = new TreeNode(rootVal);

    // Find root position in inorder to split left and right subtrees
    const mid = indexMap.get(rootVal);

    // Left subtree = inorder[inLeft .. mid-1]
    root.left = helper(inLeft, mid - 1);

    // Right subtree = inorder[mid+1 .. inRight]
    root.right = helper(mid + 1, inRight);

    return root;
  }

  // Entire inorder range is the full tree
  return helper(0, inorder.length - 1);
};

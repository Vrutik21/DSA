// 230. Kth Smallest Element in a BST

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
 * @param {number} k
 * @return {number}
 */
// TC - O(n) worst case
// SC - O(h)
var kthSmallest = function (root, k) {
  let ans = null;
  let count = k;

  // Inorder = Left -> Node -> Right
  // In a BST, inorder visits values in sorted ascending order
  function traversal(curr) {
    // Stop if node is null
    // Also stop early if we already found the answer
    if (!curr || ans !== null) return;

    traversal(curr.left);

    // We are now visiting the next smallest node
    count--;

    // When count becomes 0, this node is the kth smallest
    if (count === 0) {
      ans = curr.val;
      return;
    }

    traversal(curr.right);
  }

  traversal(root);

  return ans;
};

/*
FOLLOW-UP:
If the BST is modified often (insert/delete) and kthSmallest is asked frequently,
doing inorder every time is expensive.

Why?
- Current approach may take O(n) in the worst case for each query.
- If many queries come, repeating traversal again and again is not efficient.

Optimization idea:
- Store extra information at every node:
    node.size = total number of nodes in the subtree rooted at this node

Formula:
- node.size = 1 + size(node.left) + size(node.right)

How does this help?
At any node:
- leftSize = number of nodes in left subtree

Then:
1. if k === leftSize + 1
   => current node is the kth smallest

2. if k <= leftSize
   => answer lies in the left subtree

3. if k > leftSize + 1
   => answer lies in the right subtree
   => now search for (k - leftSize - 1)th smallest in the right subtree

Example:
        5
       / \
      3   7
     / \   \
    2   4   8

Suppose k = 4
- At node 5, left subtree has 3 nodes: 2, 3, 4
- That means 5 itself is the 4th smallest

Why balancing matters:
- In a normal BST, tree can become skewed
- Then operations can degrade to O(n)
- So for true optimization, use a balanced BST
  like AVL Tree / Red-Black Tree and store subtree sizes too

Complexities of optimized approach:
- kthSmallest: O(log n)
- insert: O(log n)
- delete: O(log n)
- extra storage: O(1) extra field per node

Interview one-liner:
- "If kth-smallest queries are frequent and the BST changes often, I would
   augment each node with subtree size, so I can move left or right based on
   how many nodes are in the left subtree instead of doing full inorder every time."
*/
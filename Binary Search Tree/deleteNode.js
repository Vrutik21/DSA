// 450. Delete Node in a BST

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
 * @param {number} key
 * @return {TreeNode}
 */
// TC - O(h)
// SC - O(h)
// Main Idea - Search for the node using BST property
// Once found, Handle 3 cases -
// No child      -> return null
// One child     -> return that child
// Two children  -> replace with inorder successor (smallest value in right subtree), then delete that successor node
var deleteNode = function (root, key) {
  // If tree/subtree is empty, nothing to delete
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Node found

    // Node has no left child
    if (!root.left) return root.right;
    // Node has no right child
    if (!root.right) return root.left;

    // Node has both left and right children
    // We use the inorder successor - the smallest node in the right subtree
    let successor = root.right;

    while (successor.left) {
      successor = successor.left;
    }

    // Copy successor's value into current node
    root.val = successor.val;
    // Delete the duplicate successor node from the right subtree
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
};

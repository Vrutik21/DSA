// 297. Serialize and Deserialize Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// TC - O(n)
// SC - O(n)
var serialize = function (root) {
  if (!root) return "";

  let hash = "";

  //  Preorder traversal
  function traversal(curr) {
    if (!curr) {
      hash += ",#";
      return;
    }

    // We used "," coz there can be negative numbers
    hash += "," + curr.val;

    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);

  return hash;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// TC - O(n)
// SC - O(n)
var deserialize = function (data) {
  if (data.length === 0) return null;

  // Split by "," and remove the first empty token
  // Example: ",1,2,#,#,3,#,#" -> ["1", "2", "#", "#", "3", "#", "#"]
  const tokens = data.split(",").slice(1);

  let i = 0;

  function build() {
    if (i >= tokens.length) return null;

    const tok = tokens[i];
    i++;

    if (tok === "#") return null;

    const node = new TreeNode(Number(tok));
    node.left = build();
    node.right = build();

    return node;
  }

  return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// 572. Subtree of Another Tree

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Method 1 : Using recursion and DFS

// Pattern: Tree DFS + Recursive Tree Comparison
// TC: O(n * m) worst case
// SC: O(h1 + h2) recursion stack
function isSubtree1(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // Empty tree is a subtree of any tree
  if (!subRoot) return true;

  // Cannot find a non-empty subtree inside an empty tree
  if (!root) return false;

  // Check if a subtree starting at the current node matches
  if (isSameTree(root, subRoot)) {
    return true;
  }

  // Otherwise, look for subRoot in the left or right subtree
  return isSubtree1(root.left, subRoot) || isSubtree1(root.right, subRoot);
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Both reached null together -> structures match
  if (!p && !q) return true;

  // Only one is null -> structures differ
  if (!p || !q) return false;

  // Same position but different values
  if (p.val !== q.val) return false;

  // Both left and right subtrees must match
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Method 2 : Serialization + naive substring search
// TC : O(n * m) worst case
// SC : O(n * m)
function isSubtree2(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const serializedRoot = serialize(root);
  const serializedSubRoot = serialize(subRoot);

  return serializedRoot.includes(serializedSubRoot);
}

function serialize(root: TreeNode | null): string {
  let serialized = "";

  function traversal(curr: TreeNode | null): void {
    // N represents a null node
    if (!curr) {
      serialized += "#,";
      return;
    }

    // V marks the beginning of an actual node value.
    // This prevents values from accidentally matching
    // inside other values.
    serialized += "V" + curr.val + ",";

    // Preorder traversal: Node -> Left -> Right
    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);

  return serialized;
}

// Method 3 : Serialization + KMP substring search algo
// TC : O(n + m) worst case
// SC : O(n + m)
function isSubtree3(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const serializedRoot = serialize(root); // O(n)
  const serializedSubRoot = serialize(subRoot); // O(m)

  return kmpSearch(serializedRoot, serializedSubRoot);
}

// KMP substring search algorithm
function kmpSearch(text: string, pattern: string): boolean {
  if (pattern.length === 0) return true;

  // Build information about the pattern
  const lps = buildLPS(pattern);

  let i = 0; // text pointer
  let j = 0; // pattern pointer

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;

      // We matched the entire pattern
      if (j === pattern.length) {
        return true;
      }
    } else {
      if (j > 0) {
        // Reuse previously matched part of the pattern
        j = lps[j - 1];
      } else {
        // No part of pattern matched
        i++;
      }
    }
  }

  return false;
}

function buildLPS(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0); // O(m)

  // length = length of previous matching prefix/suffix
  let length = 0;

  // lps[0] is always 0,
  // so start from index 1
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length > 0) {
        // Try the next smaller possible prefix
        length = lps[length - 1];
      } else {
        // No matching prefix/suffix exists here
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

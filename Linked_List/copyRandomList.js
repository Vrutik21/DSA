// 138. Copy List with Random Pointer

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
// TC - O(n)
// SC - O(n) // using a hash map
var copyRandomList = function (head) {
  if (!head) return null;

  const map = new Map(); // original node -> copied node

  //  Create all nodes
  let curr = head;
  while (curr) {
    map.set(curr, new _Node(curr.val, null, null));
    curr = curr.next;
  }

  // Connect next and random
  curr = head;
  while (curr) {
    const copy = map.get(curr);
    copy.next = curr.next ? map.get(curr.next) : null;
    copy.random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
  }

  return map.get(head);
};

// 138. Copy List with Random Pointer

class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val: number, next: _Node | null, random: _Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

// TC - O(n)
// SC - O(n) // using a hash map
function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null;

  // original node -> copied node
  const map = new Map<_Node, _Node>();

  let curr: _Node | null = head;

  // Pass 1: Create a copy of every node
  while (curr) {
    map.set(curr, new _Node(curr.val, null, null));
    curr = curr.next;
  }

  curr = head;

  // Pass 2: Connect next and random pointers
  while (curr) {
    const copy = map.get(curr)!;
    copy.next = curr.next ? map.get(curr.next)! : null;
    copy.random = curr.random ? map.get(curr.random)! : null;
    curr = curr.next;
  }

  return map.get(head)!;
}

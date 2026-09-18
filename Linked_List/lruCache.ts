// 146. LRU Cache

// TC - O(1)
// SC - O(capacity) (Map + nodes in DLL)

// Doubly Linked List Node
// Pattern : HashMap + Doubly Linked List
class _Node {
  key: number;
  val: number;
  next: _Node | null;
  prev: _Node | null;

  constructor(
    key: number = 0,
    val: number = 0,
    next: _Node | null = null,
    prev: _Node | null = null,
  ) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCache {
  capacity: number;
  map: Map<number, _Node>;
  head: _Node | null;
  tail: _Node | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();

    // Dummy nodes
    this.head = new _Node();
    this.tail = new _Node();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove a node from the list
  _removeNode(node: _Node): void {
    let prevNode = node.prev!;
    let nextNode = node.next!;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  // Add a node right after dummy head (most recently used)
  _addToFront(node: _Node): void {
    let firstRealNode = this.head!.next!;

    node.prev = this.head;
    node.next = firstRealNode;

    this.head!.next = node;
    firstRealNode.prev = node;
  }

  // Accessed or updated node becomes most recent
  _moveToFront(node: _Node): void {
    this._removeNode(node);
    this._addToFront(node);
  }

  // Remove least recently used node (node before tail)
  _removeLRU(): void {
    const lruNode = this.tail!.prev!;

    this._removeNode(lruNode);
    this.map.delete(lruNode.key);
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key)!;

    // Accessed node becomes most recently used
    this._moveToFront(node);

    return node.val;
  }

  put(key: number, value: number): void {
    // If key exists, update and move to front
    if (this.map.has(key)) {
      let node = this.map.get(key)!;
      node.val = value;
      // accessed then it will become most recent
      // move to front
      this._moveToFront(node);
      return;
    }

    // If key does not exist, then add a key to front
    let newNode = new _Node(key, value);

    this.map.set(key, newNode);
    // add to front
    this._addToFront(newNode);

    // if capacity exceeds the cache size then evict the LRU
    if (this.map.size > this.capacity) {
      // removeLRU
      this._removeLRU();
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

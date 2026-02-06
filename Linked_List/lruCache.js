// 146. LRU Cache

// TC - O(1)
// SC - O(capacity) (Map + nodes in DLL)

// Doubly Linked List Node
function Node(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map(); // key -> Node

  // Dummy head and tail
  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

// Remove a node from the list
LRUCache.prototype._removeNode = function (node) {
  const prevNode = node.prev;
  const nextNode = node.next;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;
};

// Add a node right after head (most recently used)
LRUCache.prototype._addToFront = function (node) {
  const firstRealNode = this.head.next;

  node.prev = this.head;
  node.next = firstRealNode;

  this.head.next = node;
  firstRealNode.prev = node;
};

// Accessed or updated node becomes most recent
LRUCache.prototype._moveToFront = function (node) {
  this._removeNode(node);
  this._addToFront(node);
};

// Remove least recently used node (node before tail)
LRUCache.prototype._removeLRU = function () {
  const lruNode = this.tail.prev;
  this._removeNode(lruNode);
  this.map.delete(lruNode.key);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;

  const node = this.map.get(key);
  this._moveToFront(node); // accessed then it will become most recent
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // If key exists, update and move to front
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.value = value;
    this._moveToFront(node);
    return;
  }

  // Insert new key
  const newNode = new Node(key, value);
  this.map.set(key, newNode);
  this._addToFront(newNode);

  // If capacity exceeded, evict LRU
  if (this.map.size > this.capacity) {
    this._removeLRU();
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

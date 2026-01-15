// 622. Design Circular Queue

/**
 * @param {number} k
 */
// TC - O(1) for each function
// SC - O(k)
// Normal queue enqueue is O(1).
// Dequeue is either O(1) (without shifting) or O(n) (with shifting).
// Circular queue guarantees O(1) for both while using space efficiently.
var MyCircularQueue = function (k) {
  this.q = Array(k);
  this.size = k;

  this.front = 0; // points to current front element
  this.rear = 0; // points to next insert position
  this.count = 0; // number of elements in the queue
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  this.q[this.rear] = value;
  this.rear = (this.rear + 1) % this.size;
  this.count++;

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;

  this.q[this.front] = undefined;
  this.front = (this.front + 1) % this.size;
  this.count--;

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;

  return this.q[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;

  //   rear is next insertion spot, so last element is one step behind rear
  // To avoid negative values, we add the size to get in the range
  return this.q[(this.rear - 1 + this.size) % this.size];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count === this.size;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

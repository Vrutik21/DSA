// 381. Insert Delete GetRandom O(1) - Duplicates allowed

// TC - O(1)
// SC - O(n)
var RandomizedCollection = function () {
  // We will have set for each value inside our map.
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  const exists = this.map.has(val);

  if (!exists) {
    this.map.set(val, new Set());
  }

  this.arr.push(val);
  this.map.get(val).add(this.arr.length - 1);

  return !exists;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.map.has(val) || this.map.get(val).size === 0) return false;

  let idxSet = this.map.get(val);
  let index = idxSet.values().next().value;
  let lastVal = this.arr[this.arr.length - 1];

  //  replace arr[index] with lastVal
  this.arr[index] = lastVal;

  // remove val's index
  idxSet.delete(index);
  if (idxSet.size === 0) {
    this.map.delete(val);
  }

  //  update lastVal indices
  if (index !== this.arr.length - 1) {
    const lastSet = this.map.get(lastVal);
    lastSet.add(index);
    lastSet.delete(this.arr.length - 1);
  }

  // remove last element from array
  this.arr.pop();

  return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

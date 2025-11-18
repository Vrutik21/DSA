// 380. Insert Delete GetRandom O(1)

// TC - O(1)
// SC - O(n)
var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;

  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  let index = this.map.get(val);
  let lastVal = this.arr[this.arr.length - 1];

  this.arr[index] = lastVal;
  this.map.set(lastVal, index);
  this.arr.pop();
  this.map.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

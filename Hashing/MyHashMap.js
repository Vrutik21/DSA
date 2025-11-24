// 706. Design HashMap

var MyHashMap = function () {
  // The bucket size is random but 1000 is ideal because at most 10000 calls will be made
  // So there will be 10 items per bucket 1000 * 10 = 10k.
  // The array operations will be constant in time for at most 10 items per bucket.
  // SC - O(n)
  this.size = 1000;
  this.buckets = Array.from({ length: this.size }, () => []);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = key % this.size;
  const bucket = this.buckets[index];

  for (let pair of bucket) {
    if (pair[0] === key) {
      pair[1] = value; // update existing
      return;
    }
  }

  // otherwise insert new key-value pair
  bucket.push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = key % this.size;
  const bucket = this.buckets[index];

  for (let pair of bucket) {
    if (pair[0] === key) {
      return pair[1];
    }
  }

  return -1; // not found
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = key % this.size;
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      return;
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

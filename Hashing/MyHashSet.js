// 705. Design HashSet

var MyHashSet = function () {
  // The bucket size is random but 1000 is ideal because at most 10000 calls will be made
  // So there will be 10 items per bucket 1000 * 10 = 10k.
  // The array operations will be constant in time for at most 10 items per bucket.
  // SC - O(n)
  this.size = 1000;
  this.buckets = Array.from({ length: this.size }, () => []);
};

// TC - O(1)
MyHashSet.prototype.add = function (key) {
  const index = key % this.size;
  const bucket = this.buckets[index];

  if (!bucket.includes(key)) {
    bucket.push(key);
  }
};

// TC - O(1)
MyHashSet.prototype.remove = function (key) {
  const index = key % this.size;
  const bucket = this.buckets[index];

  const pos = bucket.indexOf(key);
  if (pos !== -1) {
    bucket.splice(pos, 1);
  }
};

// TC - O(1)
MyHashSet.prototype.contains = function (key) {
  const index = key % this.size;
  const bucket = this.buckets[index];

  return bucket.includes(key);
};

// 219. Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// TC - O(n)
// SC - O(n)
var containsNearbyDuplicate1 = function (nums, k) {
  const store = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i]) && Math.abs(store.get(nums[i]) - i) <= k) {
      return true;
    }
    store.set(nums[i], i);
  }

  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// TC - O(n)
// SC - O(k)
var containsNearbyDuplicate = function (nums, k) {
  if (k <= 0) return false;
  const store = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i])) {
      return true;
    }
    store.add(nums[i]);
    if (i >= k) store.delete(nums[i - k]);
  }

  return false;
};

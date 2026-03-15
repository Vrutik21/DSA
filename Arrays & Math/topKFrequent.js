// 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// TC - O(n log n)
// SC - O(m)
var topKFrequent = function (nums, k) {
  let store = new Map();

  for (let i = 0; i < nums.length; i++) {
    store.set(nums[i], (store.get(nums[i]) || 0) + 1);
  }

  let arr = Array.from(store.entries());

  arr.sort((a, b) => b[1] - a[1]);

  return arr.slice(0, k).map((item) => item[0]);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// TC - O(n)
// SC - O(m)
// Using Bucket Sort
var topKFrequent = function (nums, k) {
  let freqMap = new Map();

  // Count frequency of each number
  for (let i = 0; i < nums.length; i++) {
    freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
  }

  // Create buckets where index = frequency
  let buckets = new Array(nums.length + 1).fill(0).map(() => []);

  // Put each number into its frequency bucket
  for (let [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  // Traverse buckets from high frequency to low
  let results = [];
  for (let freq = buckets.length - 1; freq > 0 && results.length < k; freq--) {
    for (let val of buckets[freq]) {
      results.push(val);

      if (results.length === k) break;
    }
  }

  return results;
};

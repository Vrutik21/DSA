// 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// TC - O(n)
// SC - O(n)
var topKFrequent = function (nums, k) {
  let freqMap = new Map();

  // Step 1: Count how many times each number appears.
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Create buckets.
  // Index = frequency
  // Value = list of numbers with that frequency
  let buckets = new Array(nums.length + 1).fill(0).map(() => []);

  // Example:
  // If num 1 appears 3 times, put 1 inside buckets[3]
  for (let [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  let results = [];

  // Step 3: Start from the highest frequency bucket.
  // The most frequent numbers are at the end of the buckets array.
  for (let freq = buckets.length - 1; freq > 0 && results.length < k; freq--) {
    for (let num of buckets[freq]) {
      results.push(num);

      // Stop once we collected k elements.
      if (results.length === k) break;
    }
  }

  return results;
};

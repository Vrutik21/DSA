// 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// My solution
// TC - O(n)
// SC - O(n)
var topKFrequent1 = function (nums, k) {
  let store = new Map();
  let maxFreq = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    store.set(nums[i], (store.get(nums[i]) || 0) + 1);
    maxFreq = Math.max(maxFreq, store.get(nums[i]));
  }

  let freqStore = new Map();

  for (let i = maxFreq; i > 0; i--) {
    freqStore.set(i, []);
  }

  store.forEach((value, key) => {
    freqStore.set(
      value,
      freqStore.get(value).length > 0 ? [...freqStore.get(value), key] : [key]
    );
  });

  freqStore.forEach((value, key) => {
    if (result.length === k) {
      return result;
    } else {
      if (value.length > 0) {
        result.push(...value);
      }
    }
  });

  return result;
};

// GPT solution
// Same bucket approach as ours but instead of another hashmap, it is using
// Array for storing the buckets.
var topKFrequent = function (nums, k) {
  const freqMap = new Map();

  // Count frequency
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Buckets: index = frequency
  const buckets = Array(nums.length + 1)
    .fill(0)
    .map(() => []);

  for (let [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  // Collect from highest freq to lowest
  const result = [];
  for (let freq = buckets.length - 1; freq > 0 && result.length < k; freq--) {
    for (let num of buckets[freq]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
};

console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));

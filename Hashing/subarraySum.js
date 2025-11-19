// 560. Subarray Sum Equals K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// TC - O(n^2)
// SC - O(n)
var subarraySum1 = function (nums, k) {
  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;

    for (let j = i; j < nums.length; j++) {
      currentSum += nums[i];

      if (currentSum === k) {
        output++;
      }
    }
  }

  return output;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
// Using prefix sum math principle
var subarraySum = function (nums, k) {
  let count = 0;
  let prefixSum = 0;

  // Map to store frequency of prefix sums
  let prefixMap = new Map();

  // We start by saying prefixSum = 0 has occurred once
  prefixMap.set(0, 1);

  for (let num of nums) {
    prefixSum += num;

    // Look for prefixSum - k in map
    if (prefixMap.has(prefixSum - k)) {
      count += prefixMap.get(prefixSum - k);
    }

    // Store/update prefixSum count
    prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
  }

  return count;
};

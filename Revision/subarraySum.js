// 560. Subarray Sum Equals K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var subarraySum = function (nums, k) {
  let count = 0;

  // prefixSum means total sum from the start of the array up to current index
  let prefixSum = 0;

  // This map stores how many times each prefix sum has appeared before
  let prefixMap = new Map();

  // We store 0 once because before starting the array, the sum is 0.
  // This helps count subarrays that start from index 0.
  prefixMap.set(0, 1);

  for (const num of nums) {
    // Add current number to running total
    prefixSum += num;

    // We want to know if there was a previous prefix sum such that:
    // current prefixSum - previous prefixSum = k

    // Rearranged:
    // previous prefixSum = current prefixSum - k
    let neededPrefixSum = prefixSum - k;

    // If neededPrefixSum exists, it means there are subarray(s)
    // ending at current index whose sum is k.
    if (prefixMap.has(neededPrefixSum)) {
      count += prefixMap.get(neededPrefixSum);
    }

    // Store the current prefixSum for future subarrays
    prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
  }

  return count;
};

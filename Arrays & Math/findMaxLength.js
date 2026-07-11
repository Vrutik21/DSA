// 525. Contiguous Array

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var findMaxLength = function (nums) {
  let prefixMap = new Map();

  // Prefix sum 0 exists before the array starts.
  // This helps when the valid subarray starts from index 0.
  prefixMap.set(0, -1);

  let prefixSum = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    // Treat 0 as -1 and 1 as +1
    // Equal number of 0s and 1s means total sum becomes 0.
    if (nums[i] === 0) {
      prefixSum += -1;
    } else {
      prefixSum += 1;
    }

    // If we have seen this same prefixSum before,
    // it means the subarray between that old index + 1 and current index is balanced.
    if (prefixMap.has(prefixSum)) {
      maxCount = Math.max(maxCount, i - prefixMap.get(prefixSum));
    } else {
      // Store only the first occurrence.
      // Do not overwrite because the earliest index gives the longest length.
      prefixMap.set(prefixSum, i);
    }
  }

  return maxCount;
};

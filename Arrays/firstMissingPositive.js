// 41. First Missing Positive

/**
 * @param {number[]} nums
 * @return {number}
 */
// Using O(n) space
var firstMissingPositive = function (nums) {
  const n = nums.length;
  const seen = new Set(nums);

  for (let x = 1; x <= n + 1; x++) {
    if (!seen.has(x)) return x;
  }
};

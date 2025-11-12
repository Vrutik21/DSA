// 128. Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let store = new Set(nums);
  let best = 0;

  for (const x of store) {
    // Only start counting if x is the beginning of a chain
    if (!store.has(x - 1)) {
      let len = 1;
      let curr = x;

      // Walk forward as long as next numbers exist
      while (store.has(curr + 1)) {
        curr += 1;
        len += 1;
      }

      best = Math.max(best, len);
    }
  }

  return best;
};

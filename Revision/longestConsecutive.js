// 128. Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var longestConsecutive = function (nums) {
  const store = new Set(nums);
  let best = 0;

  // Loop over unique numbers only
  for (const x of store) {
    // Start only if x is the first number in a sequence
    if (!store.has(x - 1)) {
      let curr = x;
      let len = 1;

      // Count how far this sequence continues
      while (store.has(curr + 1)) {
        curr++;
        len++;
      }

      best = Math.max(best, len);
    }
  }

  return best;
};

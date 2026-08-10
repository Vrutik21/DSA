// 128. Longest Consecutive Sequence

// TC - O(n)
// SC - O(n)
// Pattern : This is a HashSet / sequence-start detection problem.
function longestConsecutive(nums: number[]): number {
  const store = new Set(nums);

  let longest = 0;

  for (const num of store) {
    // Only begin counting if num is the start of a sequence.
    if (!store.has(num - 1)) {
      let current = num;
      let length = 1;

      // Continue while the next consecutive number exists.
      while (store.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

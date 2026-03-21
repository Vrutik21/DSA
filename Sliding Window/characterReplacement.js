// 424. Longest Repeating Character Replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// TC - O(n)
// SC - O(1) because at most 26 uppercase English letters
var characterReplacement1 = function (s, k) {
  let left = 0;
  let right = 0;

  let count = new Map();
  let maxFreq = 0;
  let longest = 0;

  while (right < s.length) {
    const ch = s[right];

    // Add current character into the window
    count.set(ch, (count.get(ch) || 0) + 1);

    // Recompute maxFreq for the current window
    maxFreq = 0;
    for (const freq of count.values()) {
      maxFreq = Math.max(maxFreq, freq);
    }

    while (right - left + 1 - maxFreq > k) {
      count.set(s[left], count.get(s[left]) - 1);

      if (count.get(s[left]) === 0) {
        count.delete(s[left]);
      }

      left++;

      // Recompute maxFreq again after shrinking
      maxFreq = 0;
      for (const freq of count.values()) {
        maxFreq = Math.max(maxFreq, freq);
      }
    }

    longest = Math.max(longest, right - left + 1);
    right++;
  }

  return longest;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// TC - O(n)
// SC - O(1) -> at most 26 uppercase English letters
// Solution without recomputing the maxFreq (Same complexity though)
var characterReplacement = function (s, k) {
  let left = 0;
  let right = 0;

  // Stores frequency of characters inside the current window
  const count = new Map();

  // Stores the highest frequency of any single character
  // seen in the current expanding window
  let maxFreq = 0;

  // Stores the length of the longest valid window
  let longest = 0;

  while (right < s.length) {
    const ch = s[right];

    // Include current character in the window
    count.set(ch, (count.get(ch) || 0) + 1);

    // Update maxFreq only when expanding the window
    // We do NOT reduce it while shrinking
    // IMPORTANT:
    // We do NOT recompute maxFreq here
    // Even if it becomes slightly incorrect (too large),
    // it is okay because:
    // - it only makes the condition slightly lenient
    // - we might allow a slightly invalid window temporarily
    // - but we NEVER miss the correct maximum window size
    maxFreq = Math.max(maxFreq, count.get(ch));

    // If replacements needed are more than k,
    // shrink the window from the left
    while (right - left + 1 - maxFreq > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }

    // Update the best answer with the current valid window size
    longest = Math.max(longest, right - left + 1);

    // Expand window to the right
    right++;
  }

  return longest;
};

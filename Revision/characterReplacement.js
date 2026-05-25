// 424. Longest Repeating Character Replacement

// Sliding Window

// Target time: 20-25 minutes

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var characterReplacement = function (s, k) {
  let left = 0;
  let maxFreq = 0;
  let longest = 0;

  const freqCount = new Map();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // Add current character to the window
    freqCount.set(ch, (freqCount.get(ch) || 0) + 1);

    // Track highest frequency of any character in the window
    maxFreq = Math.max(maxFreq, freqCount.get(ch));

    // If replacements needed are more than k, shrink window
    while (right - left + 1 - maxFreq > k) {
      freqCount.set(s[left], freqCount.get(s[left]) - 1);
      left++;
    }

    // Update best valid window length
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

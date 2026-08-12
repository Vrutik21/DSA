// 424. Longest Repeating Character Replacement

// TC - O(n)
// Each character is processed by the right pointer once,
// and the left pointer also moves forward at most n times.

// SC - O(1)
// The string only contains 26 uppercase English letters,
// so the frequency map can contain at most 26 entries.
function characterReplacement(s: string, k: number): number {
  let left = 0;
  let maxFreqInWindow = 0;
  let longest = 0;

  const freqCount = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // Add the current character to the window.
    freqCount.set(ch, (freqCount.get(ch) || 0) + 1);

    // Keep track of the highest character frequency we have seen.
    maxFreqInWindow = Math.max(maxFreqInWindow, freqCount.get(ch)!);

    // Number of replacements needed : window size - count of most frequent character
    // If we need more than k replacements, shrink the window from the left.
    while (right - left + 1 - maxFreqInWindow > k) {
      const leftChar = s[left];

      freqCount.set(leftChar, freqCount.get(leftChar)! - 1);

      left++;
    }

    // Track the largest valid window found.
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

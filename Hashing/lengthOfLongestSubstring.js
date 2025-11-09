// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(min(m,k))
// currWindow stores at most one entry per distinct character in the current window.
// In worst case the SC would be O(n)
var lengthOfLongestSubstring = function (s) {
  let currWindow = new Map();
  let maxLen = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let rChar = s[right];

    // If character already exists in current window,
    // shrink window from left until it's removed
    while (currWindow.has(rChar)) {
      let lChar = s[left];
      currWindow.delete(lChar);
      left++;
    }

    // Add the new character and update window size
    currWindow.set(rChar, true);
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
};

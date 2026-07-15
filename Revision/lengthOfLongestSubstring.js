// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(k)
var lengthOfLongestSubstring = function (s) {
  let currWin = new Map();
  let longest = 0;

  let i = 0;
  let j = 0;

  while (j < s.length) {
    let ch = s[j];

    // If this character was already seen inside the current window,
    // move the left pointer right after its previous index.
    if (currWin.has(ch) && currWin.get(ch) >= i) {
      i = currWin.get(ch) + 1;
    }

    // Store the latest index of this character.
    currWin.set(ch, j);

    // Current window length is j - i + 1.
    longest = Math.max(longest, j - i + 1);

    j++;
  }

  return longest;
};

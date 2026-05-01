// 647. Palindromic Substrings

/**
 * @param {string} s
 * @return {number}
 */

// TC - O(n^2)
// SC - O(1)
// Similar to the Longest palindrome problem but instead we keep count at each match and return it in the end
var countSubstrings = function (s) {
  let n = s.length;
  let count = 0;

  // Helper function to expand around a center
  function expand(left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      count++;

      left--;
      right++;
    }
  }

  // Try every index as the center
  for (let i = 0; i < n; i++) {
    /*
      Odd-length palindrome

      Example:
      "aba"

      Center is one character: "b"
    */
    expand(i, i);

    /*
      Even-length palindrome

      Example:
      "abba"

      Center is between two characters: "bb"
    */
    expand(i, i + 1);
  }

  return count;
};

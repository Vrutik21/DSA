// 5. Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
// TC - O(n^2)
// SC - O(1)
var longestPalindrome = function (s) {
  let n = s.length;

  // If string length is 0 or 1, it is already a palindrome
  if (n < 2) return s;

  // These two pointers store the current best palindrome boundaries
  let bestLeft = 0;
  let bestRight = 0;

  // Helper function to expand around the given center
  function expand(left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }

    // When the while loop stops, left and right have gone one step too far.
    // So the real palindrome boundaries are: left + 1, right - 1
    return [left + 1, right - 1];
  }

  // Try every index as a possible center of a palindrome
  for (let i = 0; i < s.length; i++) {
    /*
      Odd-length palindrome:

      Odd palindrome has one center character.

      Example:
      "racecar"

      Center is "e"

      So left and right both start at the same index.
    */
    let [left1, right1] = expand(i, i);
    if (right1 - left1 > bestRight - bestLeft) {
      bestLeft = left1;
      bestRight = right1;
    }

    /*
      Even-length palindrome:

      Even palindrome has two center characters.

      Example:
      "abba"

      Center is between both "b" characters.

      So left starts at i and right starts at i + 1.
    */
    let [left2, right2] = expand(i, i + 1);
    if (right2 - left2 > bestRight - bestLeft) {
      bestLeft = left2;
      bestRight = right2;
    }
  }

  // slice end index is exclusive, so we use bestRight + 1
  return s.slice(bestLeft, bestRight + 1);
};

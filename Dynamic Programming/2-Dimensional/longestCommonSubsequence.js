// 1143. Longest Common Subsequence

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// TC: O(rows * cols)
// Because we fill every cell in the DP table once.
// SC: O(rows * cols)
// Because we store a 2D DP table of size (rows + 1) * (cols + 1)
var longestCommonSubsequence = function (text1, text2) {
  let rows = text1.length;
  let cols = text2.length;

  // Create a 2D DP table.
  // dp[row][col] means:
  // The length of the Longest Common Subsequence between:

  // 1. first `row` characters of text1
  // 2. first `col` characters of text2

  // Example:
  // text1 = "abcde"
  // text2 = "ace"
  // dp[3][2] means:
  // LCS between text1 first 3 characters => "abc"
  // and text2 first 2 characters => "ac"
  // The answer for that would be 2 because LCS is "ac".

  // We create rows + 1 and cols + 1 because we need one extra row
  // and one extra column for the empty string case.

  // dp[0][col] = 0 means text1 is empty.
  // dp[row][0] = 0 means text2 is empty.
  let dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

  // Start from 1 because row 0 and col 0 represent empty string cases.
  for (let row = 1; row <= rows; row++) {
    // Current character from text1 is text1[row - 1]
    // Current character from text2 is text2[col - 1]

    // Why row - 1 and col - 1?
    // Because strings are 0-indexed, but our dp table is 1-indexed
    // to handle the empty string row and column.

    // Example:
    // row = 1 means first character of text1, which is text1[0].
    // col = 1 means first character of text2, which is text2[0].
    for (let col = 1; col <= cols; col++) {
      if (text1[row - 1] === text2[col - 1]) {
        // If both current characters match,
        // then we can include this character in our LCS.

        // So we add 1 to the best LCS before both characters.

        // dp[row - 1][col - 1] means:
        // LCS before using current character from text1
        // and current character from text2.
        dp[row][col] = 1 + dp[row - 1][col - 1];
      } else {
        // If characters do not match,
        // we cannot use both characters together.

        // So we have two choices:

        // Choice 1:
        // Skip current character from text1.
        // This is dp[row - 1][col].

        // Choice 2:
        // Skip current character from text2.
        // This is dp[row][col - 1].

        // We take the maximum because we want the longest subsequence.
        dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
      }
    }
  }

  // The final answer is stored in the bottom-right cell.

  // dp[rows][cols] means:
  // LCS between the full text1 and the full text2.
  return dp[rows][cols];
};

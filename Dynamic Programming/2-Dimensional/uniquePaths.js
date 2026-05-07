// 62. Unique Paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// TC: O(m * n)
// We visit each cell in the grid once.
//
// SC: O(m * n)
// We create a 2D dp table of size m * n.
var uniquePaths1 = function (m, n) {
  // dp[row][col] = number of ways to reach this cell
  let dp = Array.from({ length: m }, () => Array(n).fill(0));

  // First column:
  // Only one way to reach every cell: keep moving down
  for (let row = 0; row < m; row++) {
    dp[row][0] = 1;
  }

  // First row:
  // Only one way to reach every cell: keep moving right
  for (let col = 0; col < n; col++) {
    dp[0][col] = 1;
  }

  // Fill the rest of the grid
  // For every other cell:
  // ways = ways from top cell + ways from left cell
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
    }
  }

  // Final answer is stored at the bottom-right cell
  return dp[m - 1][n - 1];
};

// Optimised solution
// We do not need 2D DP table because -
// The 1D array is like a row that keeps getting updated :
// dp[col]     = value from top
// dp[col - 1] = value from left
// So: dp[col] = dp[col] + dp[col - 1];
// means : ways to current cell = ways from top + ways from left
// That is the exact same logic as the 2D solution, just using less memory.
// TC: O(m * n)
// We still calculate each cell once.
// SC: O(n)
// We only store one row of size n.
var uniquePaths2 = function (m, n) {
  // First row has only 1 way for every column
  let dp = Array(n).fill(1);

  // Start from second row because first row is already handled
  for (let row = 1; row < m; row++) {
    // Start from second column because first column is always 1
    for (let col = 1; col < n; col++) {
      // current cell = top value + left value
      dp[col] = dp[col] + dp[col - 1];
    }
  }

  // Last column of the last row has the final answer
  return dp[n - 1];
};

// TC: O(min(m, n))
// We only loop through the smaller number of moves.
// SC: O(1)
// We only use a few variables.
var uniquePaths = function (m, n) {
  // To reach the bottom-right cell from the top-left cell:
  // We must move down exactly (m - 1) times.
  // We must move right exactly (n - 1) times.
  let downMoves = m - 1;
  let rightMoves = n - 1;

  // Total moves needed to reach the destination.
  // Example:
  // If m = 3 and n = 7:
  // downMoves = 2, rightMoves = 6, totalMoves = 8
  let totalMoves = downMoves + rightMoves;

  // Choosing down moves or right moves gives the same answer.
  // Example:
  // 8C2 is the same as 8C6.
  // So we choose the smaller value to reduce the number of loop iterations.
  let movesToChoose = Math.min(downMoves, rightMoves);

  let answer = 1;

  // This is the optimized solution because:
  // Instead of using DP and calculating paths for every cell in the grid,
  // we directly count how many valid arrangements of moves are possible.
  //
  // Example:
  // For m = 3, n = 7:
  // We need 2 down moves and 6 right moves.
  // Total moves = 8.
  //
  // So we just need to choose 2 positions for the down moves:
  // 8C2 = (7 * 8) / (1 * 2)
  //
  // We avoid direct factorials like:
  // 8! / (2! * 6!)
  //
  // because factorials can create very large intermediate numbers.
  // This loop calculates the combination step by step.
  for (let i = 1; i <= movesToChoose; i++) {
    answer = (answer * (totalMoves - movesToChoose + i)) / i;
  }

  // Math.round handles tiny floating-point precision issues in JavaScript.
  return Math.round(answer);
};

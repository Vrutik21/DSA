// 62. Unique Paths

// TC : O(m*n)
// SC : O(m*n)
// Pattern : 2-D DP
function uniquePaths1(m: number, n: number): number {
  // Create an m x n DP grid
  let dp = Array.from({ length: m }, () => Array(n).fill(0));

  // First column has only 1 way to reach each cell: keep moving down
  for (let row = 0; row < m; row++) {
    dp[row][0] = 1;
  }

  // First row has only 1 way to reach each cell: keep moving right
  for (let col = 0; col < n; col++) {
    dp[0][col] = 1;
  }

  // Start from row 1 and col 1 because first row/column are base cases
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      // current = above + left
      dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// Space optimization
// TC : O(m * n)
// SC : O(n)
// dp[col] stores the number of ways to reach that column for the row we are currently processing.
function uniquePaths(m: number, n: number): number {
  // First row has only 1 way to reach each cell: keep moving right
  const dp = new Array(n).fill(1);

  // Start from row 1 because row 0 is already initialized
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      // dp[col]     = ways from ABOVE (old value from previous row)
      // dp[col - 1] = ways from LEFT (already updated in current row)
      dp[col] = dp[col] + dp[col - 1];
    }
  }

  // Bottom-right cell
  return dp[n - 1];
}

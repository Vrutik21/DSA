// 378. Kth Smallest Element in a Sorted Matrix

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// Brute force solution
// TC - O(n^2 log n)
// SC - O(n^2)
var kthSmallest1 = function (matrix, k) {
  let arr = [];

  // Flatten the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr.push(matrix[i][j]);
    }
  }

  // Sort the array
  arr.sort((a, b) => a - b);

  // Return kth element
  return arr[k - 1];
};

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// Binary search
// TC - O(n * log(range))
// SC - O(1)
var kthSmallest = function (matrix, k) {
  let n = matrix.length;

  //   Helper function:
  // Count how many elements in the matrix are <= x
  function countLessEqual(x) {
    // start at last row (bottom)
    let row = n - 1;
    // start at first column (left)
    let col = 0;
    // how many values <= x
    let count = 0;

    while (row >= 0 && col < matrix[0].length) {
      if (matrix[row][col] <= x) {
        // If current value <= x, then everything above it in this column is also <= x
        // All 3 values are <= x → add (row + 1)
        count += row + 1;
        // move right → larger values
        col++;
      } else {
        // move up → smaller values
        row--;
      }
    }

    return count;
  }

  //   Binary search on the VALUE RANGE, not on the matrix indices
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];

  //   We narrow the range until low == high
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    // Count how many numbers are <= mid
    const cnt = countLessEqual(mid);

    if (cnt < k) {
      // Not enough values <= mid → need larger numbers
      low = mid + 1;
    } else {
      // Enough values (or more) → answer is <= mid
      high = mid;
    }
  }

  //   When low == high, we have found the K-th smallest value
  return low;
};

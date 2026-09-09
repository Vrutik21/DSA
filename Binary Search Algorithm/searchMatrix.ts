// 74. Search a 2D Matrix

// TC : O(log(m * n))
// SC : O(1)
function searchMatrix(matrix: number[][], target: number): boolean {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Treat the matrix like one sorted 1D array
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    // Convert 1D index to row and column
    const r = Math.floor(mid / cols);
    const c = mid % cols;

    if (matrix[r][c] === target) {
      return true;
    } else if (matrix[r][c] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

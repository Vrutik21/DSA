// 73. Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// TC - O(m * n)
// SC - O(1)
var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let firstRowZero = false;
  let firstColZero = false;

  // Check if first column originally has any zero
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // Check if first row originally has any zero
  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Use first row and first column as markers
  // Start from 1 because first row/col are handled separately
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0; // mark this row
        matrix[0][col] = 0; // mark this column
      }
    }
  }

  // Set inner cells to zero based on markers
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // If first row originally had zero, zero out the whole first row
  if (firstRowZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }

  // If first column originally had zero, zero out the whole first column
  if (firstColZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }
};

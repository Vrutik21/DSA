// 48. Rotate Image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// TC - O(n^2)
// SC - O(1) since it is in-place algo
var rotate = function (matrix) {
  // It is a nxn matrix
  let n = matrix.length;

  // Step 1: Transpose the matrix
  // Swap matrix[row][col] with matrix[col][row]
  for (let row = 0; row < n; row++) {
    for (let col = row + 1; col < n; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  // Step 2: Reverse every row
  // This completes the 90 degree clockwise rotation
  for (let row = 0; row < n; row++) {
    matrix[row].reverse();
  }
};

// 54. Spiral Matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// TC - O(m*n)
// SC - O(1) excluding output
var spiralOrder = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let ans = [];

  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (top <= bottom && left <= right) {
    // Move left to right on the top row
    for (let col = left; col <= right; col++) {
      ans.push(matrix[top][col]);
    }
    top++;

    // Move top to bottom on the right column
    for (let row = top; row <= bottom; row++) {
      ans.push(matrix[row][right]);
    }
    right--;

    // Check is needed because top row may have crossed bottom row
    if (top <= bottom) {
      // Move right to left on the bottom row
      for (let col = right; col >= left; col--) {
        ans.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // Check is needed because left column may have crossed right column
    if (left <= right) {
      // Move bottom to top on the left column
      for (let row = bottom; row >= top; row--) {
        ans.push(matrix[row][left]);
      }
      left++;
    }
  }

  return ans;
};

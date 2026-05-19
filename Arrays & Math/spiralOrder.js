// 54. Spiral Matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// TC - O(m*n)
// SC - O(1) output does not count
// Pure simulation example
var spiralOrder = function (matrix) {
  let ans = [];

  let rows = matrix.length;
  let cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

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

    // Move right to left on the bottom row
    // Check is needed because top row may have crossed bottom row
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        ans.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // Move bottom to top on the left column
    // Check is needed because left column may have crossed right column
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        ans.push(matrix[row][left]);
      }
      left++;
    }
  }

  return ans;
};

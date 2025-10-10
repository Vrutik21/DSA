// 54. Spiral Matrix
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// TC - O(m*n)
// SC - O(1) output does not count
// Pure simulation example
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const ans = [];

  let top = 0,
    bottom = m - 1;
  let left = 0,
    right = n - 1;

  while (top <= bottom && left <= right) {
    // 1) left -> right on top row
    for (let c = left; c <= right; c++) ans.push(matrix[top][c]);
    top++;

    // 2) top -> bottom on right col
    for (let r = top; r <= bottom; r++) ans.push(matrix[r][right]);
    right--;

    // 3) right -> left on bottom row (if still valid)
    if (top <= bottom) {
      for (let c = right; c >= left; c--) ans.push(matrix[bottom][c]);
      bottom--;
    }

    // 4) bottom -> top on left col (if still valid)
    if (left <= right) {
      for (let r = bottom; r >= top; r--) ans.push(matrix[r][left]);
      left++;
    }
  }

  return ans;
};

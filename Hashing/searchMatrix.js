// 74. Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// My solution
// TC - O(mlogn)
// SC - O(1)
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    // Check if target can be in this row
    if (target < matrix[i][0] || target > matrix[i][cols - 1]) {
      continue;
    }

    // Binary search in this row
    let l = 0,
      r = cols - 1;
    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);

      if (matrix[i][mid] === target) return true;
      if (matrix[i][mid] < target) l = mid + 1;
      else r = mid - 1;
    }
  }

  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// In a 2D Array always remember -
// Row index: mid / no. of cols
// Column index: mid % no. of cols
// 2D to 1D array length would be rows * cols
// TC - O(log(m*n))
// SC - O(1)
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let r = Math.floor(mid / cols);
    let c = mid % cols;

    if (matrix[r][c] === target) return true;
    if (matrix[r][c] < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};

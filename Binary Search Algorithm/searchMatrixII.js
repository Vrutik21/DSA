// 240. Search a 2D Matrix II

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// TC - O(m logn)
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

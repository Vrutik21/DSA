// 73. Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// My solution
// k is the number of zeroes
// TC - O(mn + k(m+n)) //worst case
// SC - O(k)
var setZeroes1 = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let store = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        store.push([i, j]);
      }
    }
  }

  store.map(([i, j]) => {
    let left = j,
      right = j;
    let top = i,
      bottom = i;

    while (left >= 0) matrix[i][left--] = 0;
    while (right < cols) matrix[i][right++] = 0;
    while (top >= 0) matrix[top--][j] = 0;
    while (bottom < rows) matrix[bottom++][j] = 0;
  });

  return matrix;
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Better approach
// TC - O(mn)
// SC - O(m + n)
var setZeroes2 = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length;
  const rowsSet = new Set(),
    colsSet = new Set();

  // Pass 1: record rows/cols that need zeroing
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowsSet.add(i);
        colsSet.add(j);
      }
    }
  }

  // Pass 2: zero rows
  rowsSet.forEach((r) => {
    for (let j = 0; j < cols; j++) matrix[r][j] = 0;
  });

  // Pass 3: zero cols
  colsSet.forEach((c) => {
    for (let i = 0; i < rows; i++) matrix[i][c] = 0;
  });
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Optimal approach
// TC - O(mn)
// SC - O(1)
var setZeroes = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length;
  let firstRowZero = false,
    firstColZero = false;

  // We check the first row or col needs zeroing coz it will conflict with other rows and cols markers as we use the first row and col as markers
  // Check if first row needs zeroing
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Check if first col needs zeroing
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // Use first row/col as markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Zeroing based on markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero first row if needed
  if (firstRowZero) {
    for (let j = 0; j < cols; j++) matrix[0][j] = 0;
  }

  // Zero first col if needed
  if (firstColZero) {
    for (let i = 0; i < rows; i++) matrix[i][0] = 0;
  }
};

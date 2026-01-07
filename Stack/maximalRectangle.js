// 85. Maximal Rectangle

/**
 * @param {character[][]} matrix
 * @return {number}
 */
// TC - O(rows * cols)
// SC - O(cols) -> (heights array + stack)
var maximalRectangle = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;

  let rows = matrix.length;
  let cols = matrix[0].length;

  // +1 for sentinel 0 height at the end
  let heights = Array(cols + 1).fill(0);
  let maxArea = 0;

  for (let r = 0; r < rows; r++) {
    // Build histogram for this row
    for (let c = 0; c < cols; c++) {
      heights[c] = matrix[r][c] === "1" ? heights[c] + 1 : 0;
    }

    // Largest Rectangle in Histogram on heights[]
    // Monotonic increasing stack
    let stack = [];

    for (let i = 0; i < heights.length; i++) {
      while (
        stack.length > 0 &&
        heights[i] < heights[stack[stack.length - 1]]
      ) {
        const topIndex = stack.pop();
        const height = heights[topIndex];

        // After popping, stack top is the index of the previous smaller bar
        const leftSmallerIndex =
          stack.length === 0 ? -1 : stack[stack.length - 1];

        // Current i is the first index to the right that is smaller
        //   We do not want to include the leftSmallerIndex bar and currentSmallestIndex bar
        // width = (i-1) - (leftSmallerIndex + 1) + 1
        const width = i - leftSmallerIndex - 1;

        maxArea = Math.max(maxArea, height * width);
      }

      // Push current index
      stack.push(i);
    }
  }

  heights.pop();

  return maxArea;
};

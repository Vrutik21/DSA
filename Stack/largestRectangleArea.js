// 84. Largest Rectangle in Histogram

/**
 * @param {number[]} heights
 * @return {number}
 */
// This will not work as it will exceed the time limit for few test cases
// TC - O(n^2)
// SC - O(1)
// For each left boundary, I try all right boundaries and track the minimum height.
// Area of rectangle = height * width
var largestRectangleArea1 = function (heights) {
  let maxArea = 0;

  for (let left = 0; left < heights.length; left++) {
    let minH = Infinity;

    for (let right = left; right < heights.length; right++) {
      minH = Math.min(minH, heights[right]);
      let width = right - left + 1;
      maxArea = Math.max(maxArea, minH * width);
    }
  }

  return maxArea;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
// For each bar as the minimum height, find how far it can stretch left and right in O(1) amortized.
// TC - O(n) using a monotonic increasing stack of indices
// SC - O(n)
var largestRectangleArea = function (heights) {
  // stores indices, heights are increasing in this stack
  let stack = [];
  let maxArea = 0;

  // Sentinel : add a 0 height at the end to force-pop all remaining bars
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    // If current bar is smaller, finalize rectangles for taller bars
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
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

  // Remove sentinel to restore input (optional but clean)
  heights.pop();

  return maxArea;
};

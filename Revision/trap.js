// 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
// TC - O(n)
// SC - O(n)

// Pattern : This solution uses prefix and suffix maximum arrays.
// The important clue is that the amount of water at each position depends on:

// the tallest bar to its left
// the tallest bar to its right

// Because checking both sides separately for every index would be slow, you precompute those values.
var trap = function (height) {
  let totalWater = 0;
  let maxL = new Array(height.length);
  let maxR = new Array(height.length);

  maxL[0] = height[0];

  // Store the tallest bar seen from the left.
  for (let i = 1; i < height.length; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i]);
  }

  maxR[height.length - 1] = height[height.length - 1];

  // Store the tallest bar seen from the right.
  for (let i = height.length - 2; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1], height[i]);
  }

  // Calculate the water trapped above every bar.
  for (let i = 0; i < height.length; i++) {
    const waterLevel = Math.min(maxL[i], maxR[i]);
    // We are substracting the current bar as the water will be trapped above it
    totalWater += waterLevel - height[i];
  }

  return totalWater;
};

// Pattern : Two Pointer solution with O(1) space
// The clues are:

// We need information from both the left and right sides.
// The array can be processed from both ends.
// One side can be safely finalized based on which boundary is shorter.
// We want to improve an O(n) space solution to O(1) extra space.
// TC - O(n)
// SC - O(1)
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let totalWater = 0;

  while (left < right) {
    // The left bar is shorter, so the left side
    // determines how much water can be trapped here.
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        // This becomes the new tallest bar from the left.
        leftMax = height[left];
      } else {
        // Water fills the space between leftMax
        // and the current shorter bar.
        totalWater += leftMax - height[left];
      }

      left++;
    } else {
      // The right bar is shorter, so the right side
      // determines how much water can be trapped here.
      if (height[right] >= rightMax) {
        // This becomes the new tallest bar from the right.
        rightMax = height[right];
      } else {
        // Water fills the space between rightMax
        // and the current shorter bar.
        totalWater += rightMax - height[right];
      }

      right--;
    }
  }

  return totalWater;
};

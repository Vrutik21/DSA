// 11. Container With Most Water

// TC : O(n)
// SC : O(1)
// Pattern : Two pointers
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let maxWater = 0;

  while (left < right) {
    let width = right - left;

    // Water height is limited by the shorter wall
    let currArea = Math.min(height[left], height[right]) * width;

    maxWater = Math.max(maxWater, currArea);

    // Move the shorter wall because it is the limiting factor.
    // Keeping it while reducing width cannot give us a better result.
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

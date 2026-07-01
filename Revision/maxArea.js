// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var maxArea = function (height) {
  let maxWater = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let currArea = Math.min(height[left], height[right]) * width;

    maxWater = Math.max(maxWater, currArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

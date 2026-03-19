// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxWater = 0;

  while (i < j) {
    maxWater = Math.max(maxWater, (j - i) * Math.min(height[i], height[j]));

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxWater;
};

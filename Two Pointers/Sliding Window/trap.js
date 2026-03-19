// First Hard question
// 42
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // TC - O(n)
  // SC - O(n)
  let totalWater = 0;
  let maxL = [];
  let maxR = [];
  maxL[0] = height[0];
  maxR[height.length - 1] = height[height.length - 1];
  let i = 1;
  let j = height.length - 2;

  while (i < height.length || j >= 0) {
    if (i < height.length) {
      maxL[i] = Math.max(maxL[i - 1], height[i]);
      ++i;
    }

    if (j >= 0) {
      maxR[j] = Math.max(maxR[j + 1], height[j]);
      --j;
    }
  }

  for (let i = 0; i < height.length; i++) {
    let currUnit = height[i];

    totalWater += Math.min(maxL[i], maxR[i]) - currUnit;
  }

  return totalWater;
};

console.log(trap([4, 2, 0, 3, 2, 5]));

// 11
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // TC - O(n)
  // SC - O(1)
  let i = 0;
  let j = height.length - 1;
  let maxWater = 0;

  while (i < j) {
    maxWater = Math.max(
      Math.floor(Math.min(height[i], height[j]) * (j - i)),
      maxWater
    );

    if (i <= j) {
      i++;
    } else {
      j--;
    }
  }

  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

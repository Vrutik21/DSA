// 213. House Robber II

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  // Since houses are circular, we cannot take both first and last house.
  // So we try two cases:
  // 1. Rob houses from index 1 to n - 1
  // 2. Rob houses from index 0 to n - 2
  let bestExcludingFirstHouse = robLinear(nums, 1, nums.length - 1);
  let bestExcludingLastHouse = robLinear(nums, 0, nums.length - 2);

  return Math.max(bestExcludingFirstHouse, bestExcludingLastHouse);
};

var robLinear = function (nums, start, end) {
  // Best answer from two houses before current house
  let bestBeforePreviousHouse = 0;

  // Best answer from one house before current house
  let bestBeforeCurrentHouse = 0;

  for (let i = start; i <= end; i++) {
    // If we rob current house, we cannot rob previous house
    let robCurrentHouse = nums[i] + bestBeforePreviousHouse;

    // If we skip current house, best remains same as previous house
    let skipCurrentHouse = bestBeforeCurrentHouse;

    let bestAtCurrentHouse = Math.max(robCurrentHouse, skipCurrentHouse);

    // Move both variables forward
    bestBeforePreviousHouse = bestBeforeCurrentHouse;
    bestBeforeCurrentHouse = bestAtCurrentHouse;
  }

  return bestBeforeCurrentHouse;
};

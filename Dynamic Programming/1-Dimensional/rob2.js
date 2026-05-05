// 213. House Robber II

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  // Case 1:
  // Exclude first house, rob from index 1 to n - 1
  let excludeFirstHouse = robI(nums, 1, nums.length - 1);

  // Case 2:
  // Exclude last house, rob from index 0 to n - 2
  let excludeLastHouse = robI(nums, 0, nums.length - 2);

  return Math.max(excludeFirstHouse, excludeLastHouse);
};

// TC - O(n)
// SC - O(1)
var robI = function (nums, start, end) {
  // result of 2 houses before current house
  let bestBeforePreviousHouse = 0;

  // result of 1 house before current house
  let bestBeforeCurrentHouse = 0;

  for (let i = start; i <= end; i++) {
    // Option 1: Rob current house
    // Then we must add nums[i] to the best amount before previous house
    let robCurrentHouse = nums[i] + bestBeforePreviousHouse;

    // Option 2: Skip current house
    // Then best amount remains same as before current house
    let skipCurrentHouse = bestBeforeCurrentHouse;

    // Best answer after deciding for current house
    let bestAtCurrentHouse = Math.max(robCurrentHouse, skipCurrentHouse);

    // Move variables forward for next house
    bestBeforePreviousHouse = bestBeforeCurrentHouse;
    bestBeforeCurrentHouse = bestAtCurrentHouse;
  }

  return bestBeforeCurrentHouse;
};

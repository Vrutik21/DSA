// 213. House Robber II

// TC - O(n)
// SC - O(1)
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let bestExcludingFirstHouse = robLinear(nums, 1, nums.length - 1);
  let bestExcludingLastHouse = robLinear(nums, 0, nums.length - 2);

  return Math.max(bestExcludingFirstHouse, bestExcludingLastHouse);
}

function robLinear(nums: number[], start: number, end: number) {
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
}

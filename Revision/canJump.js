// 55. Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
var canJump = function (nums) {
  let farthestIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    // If current index is greater than the farthest reachable index,
    // then we can never reach this position.
    if (i > farthestIndex) {
      return false;
    }

    // From current index i, we can jump up to i + nums[i].
    // Keep the maximum reachable index so far.
    farthestIndex = Math.max(farthestIndex, i + nums[i]);

    // If we can reach or pass the last index, answer is true.
    if (farthestIndex >= nums.length - 1) {
      return true;
    }
  }

  return true;
};

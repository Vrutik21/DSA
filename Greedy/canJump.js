// 55. Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
var canJump = function (nums) {
  // farthestIndex = farthest position we can reach so far
  let farthestIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    // If current index is not reachable, we are stuck
    if (i > farthestIndex) return false;

    // Update farthest reachable index from current position
    farthestIndex = Math.max(farthestIndex, i + nums[i]);

    // If we can reach the last index, answer is true
    if (farthestIndex >= nums.length - 1) return true;
  }
};

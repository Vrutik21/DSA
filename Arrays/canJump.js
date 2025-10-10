// 55. Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
var canJump1 = function (nums) {
  let n = nums.length;
  let res = false;
  if (n <= 1) return true; // already at the end

  let curEnd = 0; // end of current jump window
  let farthest = 0; // farthest we can reach so far

  for (let i = 0; i < n - 1; i++) {
    // i + nums[i] means how far can you jump from the current index
    farthest = Math.max(farthest, i + nums[i]);

    if (i === curEnd) {
      curEnd = farthest;

      if (curEnd >= n - 1) res = true;
    }
  }

  return res;
};

// TC - O(n)
// SC - O(1)
var canJump = function (nums) {
  let n = nums.length;
  let farthest = 0;

  for (let i = 0; i < n; i++) {
    // if we can't reach this index, we're stuck
    if (i > farthest) return false;

    // update the farthest we can reach
    farthest = Math.max(farthest, i + nums[i]);

    // if we can reach or go beyond the last index
    if (farthest >= n - 1) return true;
  }

  return true;
};

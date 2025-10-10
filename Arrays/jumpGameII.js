// 45. Jump Game II

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var jump = function (nums) {
  let n = nums.length;
  if (n <= 1) return 0; // already at the end

  let jumps = 0;
  let curEnd = 0; // end of current jump window
  let farthest = 0; // farthest we can reach so far

  for (let i = 0; i < n - 1; i++) {
    // i + nums[i] means how far can you jump from the current index
    farthest = Math.max(farthest, i + nums[i]);

    if (i === curEnd) {
      jumps++;
      curEnd = farthest;

      if (curEnd >= n - 1) break;
    }
  }

  return jumps;
};

console.log(jump([2, 3, 1, 1, 4]));

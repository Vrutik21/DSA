// 53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var maxSubArray = function (nums) {
  // maxOut = best sum found so far
  let maxOut = nums[0];

  // lastOut = best sum of subarray ending at previous/current index
  let lastOut = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either start new subarray from nums[i],
    // or continue previous subarray
    lastOut = Math.max(nums[i], lastOut + nums[i]);

    // Update final answer if current subarray is better
    maxOut = Math.max(maxOut, lastOut);
  }

  return maxOut;
};

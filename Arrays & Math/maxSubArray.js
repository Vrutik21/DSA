// 53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxOut = nums[0];
  let lastOut = nums[0];

  for (let i = 1; i < nums.length; i++) {
    lastOut = Math.max(nums[i], lastOut + nums[i]);

    maxOut = Math.max(maxOut, lastOut);
  }

  return maxOut;
};

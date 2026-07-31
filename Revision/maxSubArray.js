// 53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
// Pattern :
// This is Kadane's Algorithm, which is a form of dynamic programming.

// The important clue is that the problem asks for the maximum sum of a contiguous subarray.

// At each index, you only need to know:

// Is it better to continue the previous subarray?
// Or is it better to start a new subarray here?
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either start a new subarray here
    // or extend the previous subarray.
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Keep track of the best sum found overall.
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

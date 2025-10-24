// 152. Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
// Does not work
var maxProduct1 = function (nums) {
  // This is Kadane's algorithm but it will not work because it forgets
  // that a very negative product can turn into a very large positive one when multiplied by another negative number.
  let maxOut = nums[0];
  let lastOut = nums[0];

  for (let i = 1; i < nums.length; i++) {
    lastOut = Math.max(nums[i], lastOut * nums[i]);

    maxOut = Math.max(maxOut, lastOut);
  }

  return maxOut;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var maxProduct = function (nums) {
  let ans = nums[0];
  let curMax = nums[0];
  let curMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];

    if (x < 0) [curMax, curMin] = [curMin, curMax];

    curMax = Math.max(x, curMax * x);
    curMin = Math.min(x, curMin * x);

    ans = Math.max(ans, curMax);
  }

  return ans;
};

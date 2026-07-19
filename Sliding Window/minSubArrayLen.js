// 209. Minimum Size Subarray Sum

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    // Expand the window by including nums[right]
    sum += nums[right];

    // Shrink the window while it still satisfies the target
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);

      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

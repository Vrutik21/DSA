// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// This is the most optimal and desired inteview solution
// TC - O(n^2)
// SC - O(1) extra space ignoring output
var threeSum = function (nums) {
  let ans = [];

  // Sort the array first so that:
  // 1. We can use two pointers
  // 2. We can skip duplicates easily
  const arr = nums.sort((a, b) => a - b);

  // arr.len - 2 because at least 3 numbers are needed for a triplet.
  for (let k = 0; k < arr.length - 2; k++) {
    // Only process this value if it is the first occurrence
    // This avoids duplicate triplets caused by choosing the same fixed value again
    if (arr[k] !== arr[k - 1]) {
      twoSumII(arr, k, ans);
    }
  }

  return ans;
};

// Two pointer helper for 3Sum
/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number[][]} ans
 * @return {void}
 */
// TC - O(n)
// SC - O(1)
var twoSumII = function (nums, start, ans) {
  // left starts just after the fixed element
  let left = start + 1;

  // right starts from the end of the array
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right] + nums[start];

    if (sum < 0) {
      left++;
    } else if (sum > 0) {
      right--;
    } else {
      ans.push([nums[left], nums[right], nums[start]]);

      // Move both pointers inward to continue searching
      left++;
      right--;

      // Skip duplicate values on the left side
      // Otherwise we may add the same triplet again
      while (left < right && nums[left] === nums[left - 1]) left++;
      // Skip duplicate values on the right side
      while (left < right && nums[right] === nums[right + 1]) right--;
    }
  }
};

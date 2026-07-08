// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TC - O(n^2)
// SC - O(1) excluding output, because sorting is in-place
var threeSum = function (nums) {
  let ans = [];

  // Sort the array so we can use two pointers
  nums.sort((a, b) => a - b);

  for (let k = 0; k < nums.length - 2; k++) {
    // Skip duplicate fixed numbers
    if (k > 0 && nums[k] === nums[k - 1]) {
      continue;
    }

    // Small optimization:
    // If fixed number is already positive, sum cannot become 0
    // because the array is already sorted so the numbers coming after k will also be positive
    if (nums[k] > 0) {
      break;
    }

    let left = k + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[k] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        ans.push([nums[k], nums[left], nums[right]]);

        left++;
        right--;

        // Skip duplicate left values
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // Skip duplicate right values
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return ans;
};

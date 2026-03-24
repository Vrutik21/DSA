// 153. Find Minimum in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(log n)
// SC - O(1)
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    // If mid element is greater than right element,
    // so the minimum must be to the right of mid
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Mid can still be the minimum,
      // so we keep mid in the search space
      right = mid;
    }
  }

  return nums[left];
};

// 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// TC: O(log n)
// Because every time we remove half of the search space.

// SC: O(1)
// Because we only use left, right, and mid variables.
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

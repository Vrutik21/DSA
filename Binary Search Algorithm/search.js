// 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// TC - O(log n)
// SC - O(1)
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return target;
    } else {
      if (nums[left] <= nums[mid]) {
        if (target < nums[mid] && target >= nums[left]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (target > nums[mid] && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }

  return -1;
};

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// 81. Search in Rotated Sorted Array II

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// TC - O(n)
// Because in the worst case all are duplicates so we search for all elements
// SC - O(1)
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return true;
    } else {
      if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
        left++;
        right--;
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
  }

  return false;
};

// Edge case
// [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]
// target = 2

// Worst case
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// target = 2

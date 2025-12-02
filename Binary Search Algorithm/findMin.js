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
    // minimum is in the right half.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // minimum is in the left half (including mid)
      right = mid;
    }
  }

  return nums[left];
};

// Edge case
// [5, 1, 2, 3, 4]

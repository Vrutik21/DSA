// 153. Find Minimum in Rotated Sorted Array

// TC: O(log n)
// SC: O(1)
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // If mid is greater than right,
    // the minimum must be on the right side of mid.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // nums[mid] <= nums[right]
      // The minimum is either at mid
      // or somewhere to the left of mid.
      // We keep mid because mid itself could be the minimum.
      right = mid;
    }
  }

  return nums[left];
}

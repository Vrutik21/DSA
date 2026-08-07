// 153. Find Minimum in Rotated Sorted Array II

// TC: O(log n)
// Worst case would be O(n) if there are many duplicates
// SC: O(1)

// Entire Idea :
// mid > right
//     → minimum is RIGHT

// mid < right
//     → minimum is MID or LEFT

// mid === right
//     → WE DON'T KNOW
//     → right--
function findMinII(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // Case : 1
    // nums[mid] > nums[right]
    //   Example:
    //  [4, 5, 6, 7, 0, 1, 2]
    //            M        R
    // Since mid is greater than right, the rotation point
    // and therefore the minimum must be to the RIGHT of mid.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    // Case : 2
    // nums[mid] < nums[right]
    // Example:
    // [4, 5, 0, 1, 2]
    //        M     R
    else if (nums[mid] < nums[right]) {
      right = mid;
    }
    // Case : 3
    // nums[mid] === nums[right]
    // Example:
    // [2, 2, 2, 0, 1, 2]
    //           M     R
    // Because the values are equal, we cannot determine which side contains the minimum.
    // We safely remove one duplicate from the right.
    else {
      right--;
    }
  }

  // left and right eventually meet at the minimum.
  return nums[left];
}

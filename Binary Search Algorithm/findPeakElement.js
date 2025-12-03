// 162 Find Peak Element

/**
 * @param {number[]} nums
 * @return {number}
 */
// My solution
// TC - O(log n)
// SC - O(1)
var findPeakElement1 = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (
      mid !== 0 &&
      mid !== nums.length - 1 &&
      nums[mid] > nums[mid - 1] &&
      nums[mid] > nums[mid + 1]
    ) {
      return mid;
    } else {
      if (nums[mid + 1] > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return right;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC - O(log n)
// SC - O(1)
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};

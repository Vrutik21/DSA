/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray2 = function (arr) {
  // My approach
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let m = left + Math.floor((right - left) / 2);

    if (arr[m - 1] < arr[m] && arr[m + 1] < arr[m]) {
      return m;
    } else if (arr[left] > arr[m] || arr[m - 1] > arr[m]) {
      right = m - 1;
    } else {
      left = m + 1;
    }
  }

  return left;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  // A more simple approach
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
console.log(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90]));
console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));

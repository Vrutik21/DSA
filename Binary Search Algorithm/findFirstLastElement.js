// 34. Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// TC - O(logn)
// SC - O(1)
var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let arr = [-1, -1];

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      if (mid === 0 || nums[mid - 1] !== target) {
        arr[0] = mid;
        break;
      } else {
        r = mid - 1;
      }
    } else {
      if (nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  if (arr[0] === -1) {
    return arr;
  }

  l = arr[0];
  r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        arr[1] = mid;
        break;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return arr;
};

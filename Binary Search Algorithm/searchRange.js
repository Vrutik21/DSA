/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function (nums, target) {
  // My solution
  let left = 0;
  let right = nums.length - 1;
  let arr = [-1, -1];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[0] === -1) {
      if (nums[mid] >= target) {
        if (nums[mid] === target) {
          if (mid > 0 && nums[mid - 1] === target) {
            right = mid - 1;
          } else {
            arr[0] = mid;
            left = mid;
            right = nums.length - 1;
          }
        } else {
          right = mid - 1;
        }
      } else {
        left = mid + 1;
      }
    } else {
      if (left === right) {
        arr[1] = mid;
        break;
      }
      if (nums[mid] <= target) {
        if (nums[mid] === target) {
          if (mid < nums.length - 1 && nums[mid + 1] === target) {
            left = mid + 1;
          } else {
            arr[1] = mid;
            break;
          }
        } else {
          left = mid + 1;
        }
      } else {
        right = mid - 1;
      }
    }
  }

  return arr;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // Akshay's approach
  let l = 0;
  let r = nums.length - 1;
  let arr = [-1, -1];

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (nums[m] === target) {
      arr[0] = m;
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (nums[m] === target) {
      arr[1] = m;
      l = m + 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return arr;
};

console.log(searchRange([7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9], 7));

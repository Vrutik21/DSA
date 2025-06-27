/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));

// 75. Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Two pass solution
// TC - O(n)
// SC - O(1)
var sortColors = function (nums) {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else if (nums[i] === 1) {
      oneCount++;
    } else {
      twoCount++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount > 0) {
      nums[i] = 0;
      zeroCount--;
    } else if (oneCount > 0) {
      nums[i] = 1;
      oneCount--;
    } else {
      nums[i] = 2;
      twoCount--;
    }
  }
};

// One pass solution
// TC - O(n)
// SC - O(1)
var sortColors = function (nums) {
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;

  while (mid <= right) {
    if (nums[mid] === 0) {
      let temp = nums[mid];
      nums[mid] = nums[left];
      nums[left] = temp;

      left++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      let temp = nums[mid];
      nums[mid] = nums[right];
      nums[right] = temp;

      right--;
      // Do not increment mid here because the swapped value must be checked.
    }
  }
};

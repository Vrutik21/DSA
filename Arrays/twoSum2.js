// 167. Two SumII - input array is sorted

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumII = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[i] + nums[j];

    if (sum > target) {
      --j;
    } else if (sum < target) {
      ++i;
    } else {
      return [i + 1, j + 1];
    }
  }
};

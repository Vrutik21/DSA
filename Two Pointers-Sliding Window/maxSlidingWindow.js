/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];

  let i = 0;
  let j = k - 1;

  let max = -Infinity;
  for (let y = 0; y < j; y++) {
    if (nums[y] >= max) {
      max = nums[y];
    }
  }

  result.push(max);
  ++j;
  ++i;

  while (j < nums.length) {
    if (nums[j] >= result[result.length - 1]) {
      result.push(nums[j]);
    } else {
      result.push(result[result.length - 1]);
    }
    ++j;
    ++i;
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

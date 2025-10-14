// 41. First Missing Positive

/**
 * @param {number[]} nums
 * @return {number}
 */
// Using O(n) space
var firstMissingPositive1 = function (nums) {
  const n = nums.length;
  const seen = new Set(nums);

  for (let x = 1; x <= n + 1; x++) {
    if (!seen.has(x)) return x;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// Using O(1) space
var firstMissingPositive = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  for (let j = 0; j < n; j++) {
    if (nums[j] !== j + 1) return j + 1;
  }

  return n + 1;
};

// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TC - O(n2)
// SC - O(n)
var threeSum = function (nums) {
  let ans = [];
  const arr = nums.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      twoSumII(arr, i, ans);
    }
  }

  return ans;
};

// 167. Two SumII - input array is sorted

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number[]} ans
 */
var twoSumII = function (nums, start, ans) {
  let i = start + 1;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[i] + nums[j] + nums[start];

    if (sum > 0) {
      --j;
    } else if (sum < 0) {
      ++i;
    } else {
      ans.push([nums[i], nums[j], nums[start]]);
      ++i;
      --j;
      while (i < j && nums[i] === nums[i - 1]) ++i;
      while (i < j && nums[j] === nums[j + 1]) --j;
    }
  }
};

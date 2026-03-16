// 238. Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC - O(n)
// SC - O(n)
var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(n);
  let left = new Array(n);
  let right = new Array(n);

  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC - O(n)
// SC - O(1)
var productExceptSelf = function (nums) {
  let n = nums.length;
  let answer = new Array(n);

  // store prefix products in answer
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // multiply suffix products into answer
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
};

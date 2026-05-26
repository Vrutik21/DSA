// 238. Product of Array Except Self

// Topics : prefix/suffix

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC - O(n)
// SC - O(1), excluding the output array
// The key thing to remember is:
// For each index, answer = product on left * product on right.
var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n);

  // First pass:
  // answer[i] stores product of all numbers to the LEFT of i
  let prefix = 1;

  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // Second pass:
  // suffix stores product of all numbers to the RIGHT of i
  // Multiply left product with right product
  let suffix = 1;

  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
};

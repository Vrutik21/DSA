// 152. Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n)
// We go through the array once.
// SC: O(1)
// Prefix and Suffix Product
var maxProduct = function (nums) {
  let answer = nums[0];

  let prefixProduct = 1;
  let suffixProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    // If product became 0 before, restart from current side
    if (prefixProduct === 0) prefixProduct = 1;
    if (suffixProduct === 0) suffixProduct = 1;

    // Product from left to right
    prefixProduct *= nums[i];

    // Product from right to left
    suffixProduct *= nums[nums.length - 1 - i];

    answer = Math.max(answer, prefixProduct, suffixProduct);
  }

  return answer;
};

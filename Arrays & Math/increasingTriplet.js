// 334. Increasing Triplet Subsequence

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      // Keep the smallest possible first number
      first = num;
    } else if (num <= second) {
      // num is greater than first,
      // so it can become the second number
      second = num;
    } else {
      // num is greater than both first and second
      // Therefore: first < second < num
      return true;
    }
  }

  return false;
};

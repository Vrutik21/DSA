// 268. Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */
// Using simple Math
// TC - O(n)
// SC - O(1)
var missingNumber1 = function (nums) {
  const n = nums.length;

  // We need the sum of all numbers from 0 to n.

  // Formula:
  // 0 + 1 + 2 + ... + n = (n * (n + 1)) / 2

  // Simple idea behind the formula:
  // Pair the first and last numbers.

  // Example for n = 5:
  // 1 + 2 + 3 + 4 + 5

  // Pair them:
  // 1 + 5 = 6
  // 2 + 4 = 6
  // 3 is in the middle
  // The formula is just a shortcut to get this total directly.

  // For n = 5:
  // (5 * 6) / 2 = 15
  // And:
  // 1 + 2 + 3 + 4 + 5 = 15
  let expectedSum = (n * (n + 1)) / 2;

  // Subtract all numbers that are already present.
  // Whatever remains is the missing number.
  for (let i = 0; i < nums.length; i++) {
    expectedSum = expectedSum - nums[i];
  }

  return expectedSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// Using Bit manipulation via XOR ^
// TC - O(n)
// SC - O(1)
var missingNumber = function (nums) {
  const n = nums.length;

  // Start with n because the full range is 0 to n.
  // Example:
  // nums length = 3
  // full range = 0, 1, 2, 3
  //
  // In the loop below, i will cover 0, 1, 2
  // So we start with n to include the last number.
  let missing = n;

  for (let i = 0; i < nums.length; i++) {
    // XOR the index and the actual number.
    //
    // Index gives us expected numbers: 0, 1, 2, ...
    // nums[i] gives us actual numbers from the array.
    //
    // Same numbers cancel each other:
    // x ^ x = 0
    //
    // After all cancellations, only the missing number remains.
    missing = missing ^ i ^ nums[i];
  }

  return missing;
};

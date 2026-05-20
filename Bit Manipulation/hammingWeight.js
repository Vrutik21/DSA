// 191. Number of 1 Bits

// Problem:
// Given a positive integer n, return how many 1s are present
// in its binary representation.
//
// Example:
// n = 11
// Binary of 11 = 1011
// Number of 1s = 3
//
// This count is called:
// 1. Hamming Weight
// 2. Number of set bits

/**
 * @param {number} n
 * @return {number}
 */

// TC - O(1)
// JavaScript bitwise operators work on 32-bit integers,
// so the loop runs at most 32 times.

// SC - O(1)
// We only use one extra variable: count.
var hammingWeight = function (n) {
  let count = 0;

  // Convert n to an unsigned 32-bit integer.
  //
  // JavaScript normally stores numbers as 64-bit floating-point values.
  // But bitwise operators work on 32-bit integers.
  //
  // >>> 0 does not shift anything.
  // It only forces JavaScript to treat n as an unsigned 32-bit number.
  n = n >>> 0;

  while (n !== 0) {
    // n & 1 checks the last bit of n.
    //
    // If the last bit is 1:
    // Example:
    // 1011 & 0001 = 0001
    //
    // If the last bit is 0:
    // Example:
    // 1010 & 0001 = 0000
    if ((n & 1) === 1) {
      count++;
    }

    // Move to the next bit by shifting n one position to the right.
    //
    // Example:
    // 1011 >>> 1 = 0101
    //
    // This is like removing the last binary digit.
    n = n >>> 1;
  }

  return count;
};

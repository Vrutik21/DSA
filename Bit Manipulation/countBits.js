// 338. Counting Bits

/**
 * @param {number} n
 * @return {number[]}
 */
// TC - O(n)
// We calculate the answer for every number from 0 to n once.

// SC - O(1) extra space
// The output array is required by the problem.
// Apart from that, we do not use extra space.

// This solution is DP + Bit manipulation
var countBits = function (n) {
  let ans = new Array(n + 1).fill(0);

  // ans[0] is already 0 because binary of 0 has no 1s.
  for (let i = 1; i <= n; i++) {
    // i >>> 1 removes the last bit.
    // Example:
    // 5 = 101
    // 5 >>> 1 = 10, which is 2

    // i & 1 checks whether the last bit is 1.
    // If i is odd, last bit is 1.
    // If i is even, last bit is 0.

    // So:
    // number of 1s in i = number of 1s in i without last bit + current i last bit value
    ans[i] = ans[i >>> 1] + (i & 1);
  }

  return ans;
};

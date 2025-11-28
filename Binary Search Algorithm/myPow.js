// 50. Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
// Input: x = 2.00000, n = 10
// Output: 1024.00000

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// Brute force solution
// O(n)
var myPow1 = function (x, n) {
  let num = x;
  let power = Math.abs(n);

  if (power === 0) {
    return 1;
  }

  while (power > 1) {
    num = num * x;
    power--;
  }

  if (n < 0) {
    return 1 / num;
  } else {
    return num;
  }
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// Binary exponential solution
// Odd - 2^4 = 2^2 * 2^2
// Even - 2^5 = 2 * 2^4
// TC - O(log n)
// SC - O(log n) because recursion stack depth is log n.
var myPow = function (x, n) {
  function halfPow(x, n) {
    if (n === 0) return 1;

    let half = halfPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
      // Even
      return half * half;
    } else {
      // Odd
      return half * half * x;
    }
  }

  if (n < 0) return 1 / halfPow(x, -n);
  return halfPow(x, n);
};

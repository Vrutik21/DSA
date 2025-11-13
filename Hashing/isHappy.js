// 202. Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */
// TC = For any number n, the number of digits in base 10 is ≈ log₁₀(n)
// n ≈ 10^k -> k ≈ log₁₀(n)
// So Extracting all digits of n takes O(log n) time.
// The time complexity is O(log n) because the algorithm repeatedly extracts
// digits of the number, and digit extraction takes O(log n) time since the number n has log₁₀(n) digits.
// SC - O(log n)
var isHappy = function (n) {
  let store = new Set();

  let newDigit = n;
  let currentSum = 0;

  while (newDigit !== 0) {
    let digit = newDigit % 10;
    newDigit = Math.floor(newDigit / 10);
    currentSum = currentSum + digit * digit;

    if (newDigit === 0) {
      if (currentSum === 1) {
        return true;
      }
      if (store.has(currentSum)) {
        return false;
      } else {
        store.add(currentSum);
      }
      newDigit = currentSum;
      currentSum = 0;
    }
  }
};

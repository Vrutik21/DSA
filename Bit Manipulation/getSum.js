// 371. Sum of Two Integers

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// TC - O(1)
// JavaScript bitwise operators work on 32-bit integers. So even in the worst case, the loop runs only up to around 32 times.
// SC - O(1)
var getSum = function (a, b) {
  // Keep repeating until there is no carry left.
  while (b !== 0) {
    // XOR gives the sum without carry.
    // Example:
    // 1 ^ 1 = 0
    // This is correct because in binary:
    // 1 + 1 gives 0 in the current column
    // and creates a carry for the next column.
    let sumWithoutCarry = a ^ b;

    // AND finds where carry is created.
    // Carry happens only when both bits are 1.
    // Example:
    // 1 & 1 = 1
    // But carry must move to the next left column,
    // so we shift it left by 1.
    let carry = (a & b) << 1;

    // Now we need to add:
    // 1. sumWithoutCarry
    // 2. carry
    // Since we cannot use +,
    // we repeat the same process again.
    a = sumWithoutCarry;
    b = carry;
  }

  // When carry becomes 0,
  // a contains the final answer.
  return a;
};

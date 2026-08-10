// 371. Sum of Two Integers

// TC - O(1)
// JavaScript/TypeScript bitwise operators work with 32-bit signed integers.
// Therefore, the carry can propagate at most across 32 bits.
// Because of two's complement, the same binary addition logic
// works for both positive and negative numbers.

// SC - O(1)
function getSum(a: number, b: number): number {
  // Keep going while there is still a carry to add.
  while (b !== 0) {
    // XOR adds the bits without considering carry.
    // 0 ^ 0 = 0
    // 0 ^ 1 = 1
    // 1 ^ 0 = 1
    // 1 ^ 1 = 0
    const sumWithoutCarry = a ^ b;

    // AND finds the positions where both bits are 1.
    // These are exactly the positions where a carry is generated.
    // 0 & 0 = 0
    // 0 & 1 = 0
    // 1 & 0 = 0
    // 1 & 1 = 1
    const carry = (a & b) << 1;

    // Store the partial sum in a.
    a = sumWithoutCarry;

    // Store the carry in b.
    // On the next iteration, we add this carry to the partial sum.
    b = carry;
  }

  // When b becomes 0, there is no carry remaining,
  // so a contains the final sum.
  return a;
}

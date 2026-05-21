// 190. Reverse Bits

/**
 * @param {number} n
 * @return {number}
 */
// TC - O(1)
// We always process exactly 32 bits.

// SC - O(1)
// We only use a few variables.
var reverseBits = function (n) {
  let result = 0;

  // A 32-bit number always has 32 bits,
  // so we must reverse exactly 32 positions.
  for (let i = 0; i < 32; i++) {
    // Make space in result for the next bit.
    result = result << 1;

    // Get the last bit of n.
    let lastBit = n & 1;

    // Add that bit to result.
    result = result | lastBit;

    // Remove the last bit from n.
    n = n >>> 1;
  }

  // Convert result to unsigned 32-bit integer.
  return result >>> 0;
};

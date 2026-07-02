// 91. Decode Ways

// Simplified solution -
// Can I take 1 digit?
// Yes, if current digit is not 0.

// Can I take 2 digits?
// Yes, if two-digit number is between 10 and 26.

// Total ways = one digit ways + two digit ways.

/**
 * @param {string} s
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var numDecodings = function (s) {
  let memo = new Map();

  function solve(index) {
    // If we reached the end, we found 1 valid decoding path
    if (index === s.length) return 1;

    // A standalone "0" is invalid
    if (s[index] === "0") return 0;

    // If this index is already solved, reuse the stored answer
    if (memo.has(index)) return memo.get(index);

    let ways = 0;

    // Choice 1:
    // Take 1 digit and solve the remaining string
    ways += solve(index + 1);

    // Choice 2:
    // Take 2 digits only if they form a number from 10 to 26
    if (index + 1 < s.length) {
      let twoDigits = Number(s.slice(index, index + 2));

      if (twoDigits >= 10 && twoDigits <= 26) {
        ways += solve(index + 2);
      }
    }

    // Store answer for the current index
    memo.set(index, ways);

    return ways;
  }

  return solve(0);
};

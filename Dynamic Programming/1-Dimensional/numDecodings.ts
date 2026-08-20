// 91. Decode Ways

// Pattern : 1D Dynamic Programming - Top-Down DP with Memoization

// Main idea:
// At every index, we can potentially decode:
// 1. One digit  -> move to i + 1
// 2. Two digits -> move to i + 2, only if the number is between 10 and 26

// Why DP?
// The same index can be reached through different decoding choices.
// Memoization stores solve(i) so we calculate each index only once.

// TC : O(n) with memoization
// Without memoization:
// TC: O(2^n) in the worst case because each position may branch into
// taking either 1 digit or 2 digits.
// SC : O(n) recursion stack
function numDecodings(s: string): number {
  // memo[i] = number of ways to decode starting from index i
  const memo = new Map<number, number>();

  function solve(i: number): number {
    // We successfully decoded the entire string
    if (i === s.length) {
      return 1;
    }

    // "0" cannot be decoded by itself
    if (s[i] === "0") {
      return 0;
    }

    // If we have already solved this index,
    // return the stored result instead of recalculating it.
    if (memo.has(i)) {
      return memo.get(i)!;
    }

    let ways = 0;

    // Choice 1:
    // Decode the current digit by itself
    ways += solve(i + 1);

    // Choice 2:
    // Decode the current digit together with the next digit
    if (i + 1 < s.length) {
      let twoDigits = Number(s.slice(i, i + 2));

      if (twoDigits >= 10 && twoDigits <= 26) {
        ways += solve(i + 2);
      }
    }

    // Save the result for this index so that if solve(i)
    // is reached again, we can return it immediately.
    memo.set(i, ways);

    return ways;
  }

  // Start decoding from the first character.
  return solve(0);
}

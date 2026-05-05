// 139. Word Break

// Similar to Coin Change problem
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// TC - O(n^3) because of use of slice in JS otherwise O(n^2)
// Some explanations say O(n^2), but in JavaScript, because slice() creates a substring, O(n^3) is the safer answer.
// SC - O(n+m)
// where n = length of s ; m = number of words in wordDict
var wordBreak1 = function (s, wordDict) {
  let wordSet = new Set(wordDict);

  // dp[i] means:
  // Can we break the string from index 0 to index i - 1 into valid dictionary words?
  // Example:
  // s = "leetcode"
  // dp[4] means: Can "leet" be broken into valid words?
  // dp[8] means: Can "leetcode" be broken into valid words?
  let dp = new Array(s.length + 1).fill(false);

  // Base case:
  // Empty string can always be considered valid.
  // This helps us start checking words from index 0.
  //dp index: 0 1 2 3 4 5 6 7 8
  // meaning:  "" "l" "le" "lee" "leet" "leetc" "leetco" "leetcod" "leetcode"
  dp[0] = true;

  // end represents the ending position of the current substring.
  // We go from 1 to s.length because dp has size s.length + 1.
  for (let end = 1; end <= s.length; end++) {
    // start represents where we make a cut before end.
    // We are checking:
    // left part  = s[0 ... start - 1]
    // right part = s[start ... end - 1]
    // If left part is valid and right part is in dictionary,
    // then current full part is also valid.
    for (let start = 0; start < end; start++) {
      let word = s.slice(start, end);

      // dp[start] tells us whether the left side is already valid.
      // wordSet.has(word) tells us whether the current right side is a dictionary word.
      if (dp[start] === true && wordSet.has(word)) {
        dp[end] = true;

        // Once dp[end] becomes true, no need to check more cuts for this end.
        break;
      }
    }
  }

  // Can the full string from index 0 to s.length - 1 be broken?
  return dp[s.length];
};

// Optimised solution
// TC - O(N * M)
// where N = length of s, M = maximum word length in wordDict.
// For every end index, we only check up to M previous start positions.
//
// Note: In JavaScript, slice(start, end) creates a substring,
// so a stricter JS analysis can be O(N * M^2).
//
// SC - O(N + K)
// where N = dp array size, K = total characters stored in wordDict/wordSet.
var wordBreak = function (s, wordDict) {
  let wordSet = new Set(wordDict);

  // Find the maximum word length in wordDict.
  // This helps us avoid checking substrings that are too long.
  let maxWordLength = 0;

  for (let word of wordDict) {
    maxWordLength = Math.max(maxWordLength, word.length);
  }

  let dp = new Array(s.length + 1).fill(false);

  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    // Optimization:
    // We only need to check substrings whose length is <= maxWordLength.
    //
    // Example:
    // If maxWordLength = 4 and end = 8,
    // then start should not go below 4.
    //
    // Because any substring longer than 4 cannot be in wordDict.
    let startLimit = Math.max(0, end - maxWordLength);

    for (let start = startLimit; start < end; start++) {
      let word = s.slice(start, end);

      // If left side is valid and current word exists in dictionary,
      // then s[0 ... end - 1] is also valid.
      if (dp[start] === true && wordSet.has(word)) {
        dp[end] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

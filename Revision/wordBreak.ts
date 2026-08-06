// 139. Word Break

//  Time Complexity:
//  O(n × L²)
//  n = length of the string
//  L = length of the longest dictionary word

//  For every ending position, we check at most L possible starting positions.
//  Creating a substring with slice() can take up to O(L) time.
//  Therefore, the worst-case time complexity is O(n × L²).

//  Space Complexity:
//  O(n + D)
//  The dp array uses O(n) space.
//  The Set uses O(D) space, where D is the total amount of dictionary data stored.
function wordBreak(s: string, wordDict: string[]): boolean {
  // Store dictionary words in a Set for fast lookup.
  const wordSet: Set<string> = new Set(wordDict);

  //  dp[i] means:
  //  Can the first i characters of s be divided into valid dictionary words?

  //  For example, if s = "leetcode":
  //  dp[4] represents the prefix "leet".
  //  dp[8] represents the entire string "leetcode".
  const dp: boolean[] = new Array(s.length + 1).fill(false);

  //  The empty string is considered valid.
  //  This gives us a starting point for finding the first valid word.
  //  For example, if "leet" is in the dictionary:

  //  dp[0] = true
  //  s.slice(0, 4) = "leet"

  //  Therefore, dp[4] can become true.
  dp[0] = true;

  // Find the length of the longest dictionary word.
  let maxWordLength = 0;

  for (const word of wordSet) {
    maxWordLength = Math.max(maxWordLength, word.length);
  }

  //  end represents where the current substring ends.

  //  It goes up to s.length because slice(start, end)
  //  does not include the character at the end index.
  for (let end = 1; end <= s.length; end++) {
    //  We do not need to check substrings longer than
    //  the longest word in the dictionary.
    const startLimit = Math.max(0, end - maxWordLength);

    // Try every possible starting position for the current word.
    for (let start = startLimit; start < end; start++) {
      //  dp[start] must be true.

      //  This means everything before the current word
      //  has already been divided into valid dictionary words.
      if (!dp[start]) {
        continue;
      }

      // Current possible dictionary word.
      const word = s.slice(start, end);

      //  If:
      //  1. The prefix ending at start is valid, and
      //  2. The current substring exists in the dictionary,

      //  then the prefix ending at end is also valid.
      if (wordSet.has(word)) {
        dp[end] = true;

        // No need to check more starting positions for this end.
        break;
      }
    }
  }

  // dp[s.length] represents whether the entire string is valid.
  return dp[s.length];
}

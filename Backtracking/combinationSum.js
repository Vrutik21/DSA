// 39. Combination Sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// TC - O(2^(n + target / minCandidate)) in the worst case
// Why:
// - Each call makes 2 choices: take or skip
// - "take" can happen at most target / minCandidate times
// - "skip" can happen at most n times
// - So max recursion depth is (n + target / minCandidate),
//   giving exponential worst-case branching
//
// SC - O(n + target / minCandidate) auxiliary space, ignoring output
// Why:
// - recursion stack depth is at most (n + target / minCandidate)
// - currCombination can grow up to target / minCandidate elements
var combinationSum = function (candidates, target) {
  let result = [];

  function backtrack(index, currCombination, remainingTarget) {
    // found one valid combination
    if (remainingTarget === 0) {
      // push copy otherwise the arr inside the result might point to currCombination array
      // and it might be manipulated by future actions
      result.push([...currCombination]);
      return;
    }

    // invalid path:
    // 1. no more candidates left
    // 2. sum exceeded target
    if (index === candidates.length || remainingTarget < 0) {
      return;
    }

    // Choice 1: take current candidate
    currCombination.push(candidates[index]);

    // stay on same index because same number can be reused
    backtrack(index, currCombination, remainingTarget - candidates[index]);

    // undo the choice before exploring next path
    currCombination.pop();

    // Choice 2: skip current candidate and move to next
    backtrack(index + 1, currCombination, remainingTarget);
  }

  backtrack(0, [], target);

  return result;
};

/*
Easy way to remember this problem:

At every candidate, we have only 2 choices:
1. take it
2. skip it

Why stay on same index when taking?
- because we can use the same number unlimited times

Why move to next index when skipping?
- because we are done considering that number

Why pop()?
- to undo the current choice and try another path
- this is the "backtracking" step

How duplicates are avoided:
- we only move forward in the array
- so [2,2,3] is allowed
- but [2,3,2] will never be built separately
*/

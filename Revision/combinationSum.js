// 39. Combination Sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// TC - Exponential in the worst case
// Because every candidate can create take/skip paths,
// and candidates can be reused multiple times.

// SC - O(target / minCandidate + n), ignoring output
// target / minCandidate comes from repeatedly taking the smallest number.
// n comes from moving through candidates using skip calls.
var combinationSum = function (candidates, target) {
  let ans = [];

  function backtrack(index, currCombination, remainingTarget) {
    // If remainingTarget becomes 0, we found one valid combination
    if (remainingTarget === 0) {
      ans.push([...currCombination]);
      return;
    }

    // If no candidates are left, stop
    if (index === candidates.length) {
      return;
    }

    // Choice 1: take current candidate, only if it fits
    if (candidates[index] <= remainingTarget) {
      currCombination.push(candidates[index]);

      // Stay on same index because same number can be reused
      backtrack(index, currCombination, remainingTarget - candidates[index]);

      // Undo the choice
      currCombination.pop();
    }

    // Choice 2: skip current candidate
    backtrack(index + 1, currCombination, remainingTarget);
  }

  backtrack(0, [], target);

  return ans;
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

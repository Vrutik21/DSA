// 46. Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TC : O(n * n!)
// SC : O(n) excluding output space otherwise O(n * n!) including the stored permutations
var permute = function (nums) {
  let ans = [];
  let used = new Array(nums.length).fill(false);

  function backtracking(currentAns) {
    // If currentAns has all numbers, we found one complete permutation
    if (currentAns.length === nums.length) {
      ans.push([...currentAns]);
      return;
    }

    // Try every number for the current position
    for (let i = 0; i < nums.length; i++) {
      // If this number is already used in currentAns, skip it
      if (used[i]) continue;

      // Choose nums[i]
      currentAns.push(nums[i]);
      used[i] = true;

      // Explore further
      backtracking(currentAns);

      // Undo the choice
      currentAns.pop();
      used[i] = false;
    }
  }

  backtracking([]);

  return ans;
};

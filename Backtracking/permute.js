// 46. Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TC : O(n * n!)
// SC : O(n) but if we include the auxiliary output space then it will be O(n * n!)
var permute = function (nums) {
  let ans = [];
  let currPermutation = [];
  let used = new Array(nums.length).fill(false);

  function backtrack() {
    // If current permutation has all numbers,
    // we found one complete answer.
    if (currPermutation.length === nums.length) {
      ans.push([...currPermutation]);
      return;
    }

    // Try every number as the next choice.
    for (let i = 0; i < nums.length; i++) {
      // If this number is already used in current permutation,
      // skip it.
      if (used[i]) continue;

      // Choose nums[i]
      currPermutation.push(nums[i]);
      used[i] = true;

      // Explore further with this choice
      backtrack();

      // Undo the choice so we can try another number
      currPermutation.pop();
      used[i] = false;
    }
  }

  backtrack();

  return ans;
};

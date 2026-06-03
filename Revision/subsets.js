// 78. Subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TC - O(n * 2^n)
// SC - O(n) auxiliary recursion space
// Output space - O(n * 2^n)

// Example - [1,2,3]
// Output = []
var subsets = function (nums) {
  let ans = [];

  function backtrack(index, currSubset) {
    if (index === nums.length) {
      ans.push([...currSubset]);
      return;
    }

    // Choice 1: include nums[index]
    currSubset.push(nums[index]);
    backtrack(index + 1, currSubset);

    // Undo the include choice
    currSubset.pop();

    // Choice 2: skip nums[index]
    backtrack(index + 1, currSubset);
  }

  backtrack(0, []);

  return ans;
};

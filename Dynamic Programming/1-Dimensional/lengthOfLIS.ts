// 300. Longest Increasing Subsequence

// TC : O(n^2)
// SC : O(n)
// Pattern : 1-D DP
function lengthOfLIS1(nums: number[]): number {
  // dp[i] = best answer for an increasing subsequence ending at i
  // Every individual number is itself an increasing subsequence of length 1.
  let dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    // Check every number before nums[i]
    for (let j = 0; j < i; j++) {
      // nums[i] can come after nums[j] in an increasing subsequence
      if (nums[j] < nums[i]) {
        // Take the best subsequence ending at j and append nums[i] to it.
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // LIS may end at any index not necessarily the final index.
  return Math.max(...dp);
}

// TC: O(n log n)
// SC: O(n)
// Pattern: Binary Search + Greedy
function lengthOfLIS(nums: number[]): number {
  // tails[i] = smallest ending value for an increasing subsequence of length i + 1
  let tails: number[] = [];

  for (const num of nums) {
    let left = 0;

    // We use tails.length instead of tails.length - 1
    // because we are finding an insertion position.
    // The answer can be tails.length if num belongs at the end.
    let right = tails.length;

    // Find the first position where tails[index] >= num
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (tails[mid] < num) {
        // num belongs somewhere to the right
        left = mid + 1;
      } else {
        // tails[mid] >= num
        // This could be our replacement position,
        // but there may be an earlier one.
        right = mid;
      }
    }

    // If left === tails.length,
    // num is greater than every value in tails.
    // So it extends our longest subsequence.
    if (left === tails.length) {
      tails.push(num);
    } else {
      // Otherwise replace the current ending value
      // with a smaller/better ending value.
      tails[left] = num;
    }

    console.log("tails", tails);
  }

  return tails.length;
}

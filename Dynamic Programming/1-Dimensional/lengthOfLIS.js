// 300. Longest Increasing Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n^2)
// For every index i, we check all previous indexes j.
// SC: O(n)
// We use a dp array of size n.
var lengthOfLIS1 = function (nums) {
  // dp[i] means:
  // Length of the longest increasing subsequence that ends exactly at index i.
  // Every element alone is an increasing subsequence of length 1.
  // So we start every dp[i] with 1.
  let dp = new Array(nums.length).fill(1);

  // Pick each number as the ending number of a subsequence
  for (let i = 0; i < nums.length; i++) {
    // Check all numbers before index i
    for (let j = 0; j < i; j++) {
      // If nums[j] is smaller than nums[i],
      // then nums[i] can be placed after nums[j].
      if (nums[j] < nums[i]) {
        // Either keep the current best length ending at i,
        // or extend the subsequence ending at j by adding nums[i].
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // The LIS can end at any index, not necessarily the last index.
  // So we return the maximum value from the dp array.
  return Math.max(...dp);
};

// Optimised follow up solution
// In the O(n^2) DP solution, for every number, we checked all previous numbers.
// Here, for every number, we only binary search inside tails.
// TC: O(n log n)
// We loop through nums once, and for each number we binary search inside tails.
// SC: O(n)
// In the worst case, tails can store n numbers.
var lengthOfLIS = function (nums) {
  // tails[i] stores the smallest possible ending value
  // of an increasing subsequence of length i + 1.
  //
  // Example:
  // tails[0] = smallest ending value for length 1 subsequence
  // tails[1] = smallest ending value for length 2 subsequence
  // tails[2] = smallest ending value for length 3 subsequence
  let tails = [];

  for (let num of nums) {
    let left = 0;
    let right = tails.length;

    // Binary search:
    // Find the first index where tails[index] >= num.
    //
    // Why >= ?
    // Because the subsequence must be strictly increasing.
    // So equal values should replace, not extend.
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);

      if (tails[mid] < num) {
        // num is bigger, so it can come after tails[mid].
        // Search on the right side.
        left = mid + 1;
      } else {
        // tails[mid] >= num
        // num should replace this value or something before it.
        right = mid;
      }
    }

    // If num is bigger than all tails values, extend the length.
    // Otherwise, replace the first value >= num.
    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num;
    }
  }

  return tails.length;
};

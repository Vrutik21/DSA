// 322. Coin Change

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// TC: O(amount * coins.length)
// For every amount from 1 to amount, we try every coin.
// SC: O(amount)
// We store the minimum coins needed for every amount from 0 to amount.
var coinChange = function (coins, amount) {
  // dp[i] = minimum number of coins needed to make amount i
  let dp = Array(amount + 1).fill(Infinity);

  // Base case: 0 coins are needed to make amount 0
  dp[0] = 0;

  // Build answer for every amount from 1 to amount
  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    // Try every available coin
    for (let coin of coins) {
      // We can use this coin only if it does not go below 0
      if (currentAmount - coin >= 0) {
        // Use this coin once + best way to make the remaining amount
        dp[currentAmount] = Math.min(
          dp[currentAmount],
          1 + dp[currentAmount - coin],
        );
      }
    }
  }

  // If amount is still Infinity, it means we cannot make that amount
  return dp[amount] === Infinity ? -1 : dp[amount];
};

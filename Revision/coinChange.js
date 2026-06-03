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
  let dp = new Array(amount + 1).fill(Infinity);

  // To make amount 0, we need 0 coins
  dp[0] = 0;

  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    for (let coin of coins) {
      // We can only use this coin if it does not make the amount negative
      if (currentAmount - coin >= 0) {
        dp[currentAmount] = Math.min(
          dp[currentAmount],
          1 + dp[currentAmount - coin],
        );
      }
    }
  }

  // If dp[amount] is still Infinity, it means amount cannot be formed
  return dp[amount] === Infinity ? -1 : dp[amount];
};

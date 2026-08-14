// 322. Coin Change

// TC: O(amount * coins.length)
// For every amount from 1 to amount, we try every coin.
// SC: O(amount)
// We store the minimum coins needed for every amount from 0 to amount.
// Pattern : 1D Dynamic Programming - Bottom-Up / Tabulation
// Clue : the minimum number of coins required to reach a target.
function coinChange(coins: number[], amount: number): number {
  // dp[i] = minimum number of coins needed to make amount i
  // Infinity means we haven't found a way to make that amount yet
  let dp = new Array(amount + 1).fill(Infinity);

  // We need 0 coins to make amount 0
  dp[0] = 0;

  // Find the minimum coins needed for every amount from 1 up to the target amount
  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    for (let coin of coins) {
      // We can only use the coin if it doesn't make the remaining amount negative
      if (currentAmount - coin >= 0) {
        dp[currentAmount] = Math.min(
          dp[currentAmount],
          // Use this coin (1) + minimum coins required for the remaining amount
          1 + dp[currentAmount - coin],
        );
      }
    }
  }

  // If it is still Infinity, the amount cannot be formed
  return dp[amount] === Infinity ? -1 : dp[amount];
}

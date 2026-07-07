// 122. Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
// Since multiple transactions are allowed, every upward price movement can be counted as profit.
// So I add all positive differences between consecutive days.
var maxProfit = function (prices) {
  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }

  return totalProfit;
};

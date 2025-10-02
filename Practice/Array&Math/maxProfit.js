// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    let diff = prices[i] - minPrice;

    if (diff > maxProfit) {
      maxProfit = diff;
    }
  }

  return maxProfit;
};

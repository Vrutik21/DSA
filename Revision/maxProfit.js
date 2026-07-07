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
    // Check how much profit we can make if we sell today
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);

    // Update the cheapest buying price seen so far
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
};

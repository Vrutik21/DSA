// 1011. Capacity To Ship Packages Within D Days

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// TC - O(N∗Log(Sum(Weights)))
// SC - O(1)
var shipWithinDays = function (weights, days) {
  let low = Math.max(...weights); // minimum possible capacity
  let high = weights.reduce((a, b) => a + b, 0); // maximum capacity

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (possible(mid, days, weights)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

function possible(capacity, days, weights) {
  let currentDays = 1;
  let currentWeight = 0;

  for (let i = 0; i < weights.length; i++) {
    if (currentWeight + weights[i] > capacity) {
      currentDays++;
      currentWeight = 0;
    }
    currentWeight += weights[i];
  }

  return currentDays <= days;
}

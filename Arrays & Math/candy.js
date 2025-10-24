// 135. Candy

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.

/**
 * @param {number[]} ratings
 * @return {number}
 */
// TC - O(n)
// SC - O(n)
var candy = function (ratings) {
  const n = ratings.length;
  if (n === 0) return 0;
  const candies = new Array(n).fill(1);
  let ans = 0;

  // First we will check for left neighbors
  // so we will check from front
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Second we will check for right neighbors
  // so we will check from backwards
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  // Now we will sum up the combination
  for (let i = 0; i < candies.length; i++) {
    ans += candies[i];
  }

  return ans;
};

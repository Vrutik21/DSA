// 410. Split Array Largest Sum

// Binary Search on the answer
// “Minimize the maximum” problem
// TC - O(N ∗ Log(Sum(Nums)))
// SC - O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let low = Math.max(...nums); // minimum possible sum
  let high = nums.reduce((a, b) => a + b, 0); // maximum sum

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (possible(mid, k, nums)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

function possible(limit, totalCount, nums) {
  let currentCount = 1;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentSum + nums[i] > limit) {
      currentCount++;
      currentSum = 0;
    }
    currentSum += nums[i];
  }

  return currentCount <= totalCount;
}

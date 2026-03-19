// 239
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // TC - O(n)
  // SC - O(k)
  let result = [];
  // Using a Monotonic decreasing dequeue
  let dq = [];
  let i = (j = 0);

  while (j < nums.length) {
    // Push current elements after removing all smaller elements from the last/back
    while (dq.length && nums[j] > dq[dq.length - 1]) {
      dq.pop();
    }
    dq.push(nums[j]);

    // When window size gets larger than k
    if (j >= k - 1) {
      result.push(dq[0]);

      // if previous ith element is larger then remove it from the queue to store the largest for the current window
      // And then increment the i
      nums[i] == dq[0] && dq.shift();
      ++i;
    }
    ++j;
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

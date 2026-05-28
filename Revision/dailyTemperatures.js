// 739. Daily Temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// TC - O(n)
// SC - O(n)
// To improve speed, focus on recognizing this sentence faster:

// "For each element, find the next greater element in the future."" - That often points to a stack-based solution
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;

  // ans[i] stores how many days we wait for a warmer temperature
  let ans = new Array(n).fill(0);

  // stack stores indices whose next warmer day is not found yet
  let stack = [];

  for (let i = 0; i < n; i++) {
    // If today's temperature is warmer than the day at stack top,
    // then today is the answer for that previous day.
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let prevIndex = stack.pop();

      // Difference between current day and previous day
      ans[prevIndex] = i - prevIndex;
    }

    // Current day is now waiting for a future warmer day
    stack.push(i);
  }

  return ans;
};

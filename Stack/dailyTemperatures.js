/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures1 = function (temperatures) {
  // My approach
  // TC - O(n)
  // SC - O(n)
  let result = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    let curr = temperatures[i];

    while (stack.length > 0 && curr >= stack[stack.length - 1][0]) {
      stack.pop();
    }

    result[i] = stack.length === 0 ? 0 : stack[stack.length - 1][1] - i;

    stack.push([temperatures[i], i]);
  }

  return result;
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // cleaner code but same TC and SC
  let n = temperatures.length;
  let result = Array(n).fill(0);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    let curr = temperatures[i];

    while (stack.length > 0 && curr >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }

    stack.push([i]);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

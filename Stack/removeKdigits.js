// 402. Remove K Digits

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// Whenever you see a digit that is smaller than the previous digit, it’s beneficial to remove the previous bigger digit (if you still have removals left).
// This screams monotonic increasing stack.
// TC - O(n)
// SC - O(n)
var removeKdigits = function (num, k) {
  let stack = [];

  for (let i = 0; i < num.length; i++) {
    while (stack.length && stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      k--;
    }

    stack.push(num[i]);
  }

  // if k still left, remove from end
  while (k > 0 && stack.length) {
    stack.pop();
    k--;
  }

  // remove leading zeros
  let idx = 0;
  while (idx < stack.length && stack[idx] === "0") idx++;

  let ans = stack.slice(idx).join("");

  return ans === "" ? "0" : ans;
};

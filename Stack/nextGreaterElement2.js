/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // My approach
  // TC - O(n)
  // SC - O(n)
  let circularNums = [...nums, ...nums];
  let n = circularNums.length;
  const ans = Array(n).fill(-1);
  const stack = [];

  // Build the mapping of next greater element for each number in nums2
  for (let i = n - 1; i >= 0; i--) {
    const curr = circularNums[i];

    // Pop elements from the stack that are smaller or equal to current
    while (stack.length > 0 && stack[stack.length - 1] <= curr) {
      stack.pop();
    }

    // If stack is empty, no greater element
    ans[i] = stack.length === 0 ? -1 : stack[stack.length - 1];

    // Push current element onto stack
    stack.push(curr);
  }

  return ans.slice(0, nums.length);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // Akshay's appraoch using a mod to reuse the index after we reach the end of the array
  let n = nums.length;
  const ans = Array(n).fill(-1);
  const stack = [];

  for (let i = (2*n) - 1; i >= 0; i--) {
    const curr = circularNums[i % n];

    // Pop elements from the stack that are smaller or equal to current
    while (stack.length > 0 && stack[stack.length - 1] <= curr) {
      stack.pop();
    }

    // If stack is empty, no greater element
    ans[i % n] = stack.length === 0 ? -1 : stack[stack.length - 1];

    // Push current element onto stack
    stack.push(curr);
  }

  return ans
}
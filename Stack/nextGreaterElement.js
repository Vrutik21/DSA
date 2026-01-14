// 496. Next Greater Element I

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement1 = function (nums1, nums2) {
  // My approach
  // TC - O(n2)
  // SC - O(n)
  let stack = [];
  let passChecker = false;

  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      if (curr === nums2[j]) {
        passChecker = true;
      }

      if (passChecker === true) {
        if (nums2[j] > curr) {
          stack.push(nums2[j]);
          passChecker = false;
          continue;
        }

        if (j === nums2.length - 1 && nums2[j] > curr) {
          stack.push(-1);
          passChecker = false;
        }
      }
    }
  }

  return stack;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// TC - O(n+m)
// SC - O(n)
var nextGreaterElement = function (nums1, nums2) {
  const store = {};
  const stack = [];

  // Build the mapping of next greater element for each number in nums2
  for (let i = nums2.length - 1; i >= 0; i--) {
    const curr = nums2[i];

    // Pop elements from the stack that are smaller or equal to current
    while (stack.length > 0 && stack[stack.length - 1] <= curr) {
      stack.pop();
    }

    // If stack is empty, no greater element
    store[curr] = stack.length === 0 ? -1 : stack[stack.length - 1];

    // Push current element onto stack
    stack.push(curr);
  }

  // Build the result using the mapping based on nums1's order
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    result.push(store[nums1[i]]);
  }

  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

// 152. Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n)
// We go through the array once.
// SC: O(1)
var maxProduct = function (nums) {
  let maxEndingHere = nums[0];
  let minEndingHere = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];

    // If current number is negative,
    // max can become min and min can become max after multiplication.
    if (currentNum < 0) {
      let temp = maxEndingHere;
      maxEndingHere = minEndingHere;
      minEndingHere = temp;
    }

    // Either start a new subarray from currentNum,
    // or extend the previous subarray.
    maxEndingHere = Math.max(currentNum, currentNum * maxEndingHere);
    minEndingHere = Math.min(currentNum, currentNum * minEndingHere);

    answer = Math.max(answer, maxEndingHere);
  }

  return answer;
};

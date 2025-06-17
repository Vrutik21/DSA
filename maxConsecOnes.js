/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxOnes = 0;
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      x++;
    } else {
      maxOnes = Math.max(maxOnes, x);
      x = 0;
    }
  }

  return Math.max(maxOnes, x);
};

console.log(findMaxConsecutiveOnes([0, 1, 1, 1]));

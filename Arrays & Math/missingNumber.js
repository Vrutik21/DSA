/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let x = (n * (n + 1)) / 2;

  for (let i = 0; i < nums.length; i++) {
    x = x - nums[i];
  }

  return x;
};

console.log(missingNumber([0]));

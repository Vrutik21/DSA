/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      //   let k = nums[j];
      //   nums[j] = nums[i];
      //   nums[i] = k;
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

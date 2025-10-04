// 169. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ans = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      ans = num;
    }

    count += num === ans ? 1 : -1;
  }

  return ans;
};

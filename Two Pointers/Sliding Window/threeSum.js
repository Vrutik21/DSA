// 15
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1]) {
      twoSum(arr, i, ans);
    }
  }
  return ans;
};

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, x, ans) {
  let i = x + 1;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j] + arr[x];

    if (sum > 0) {
      --j;
    } else if (sum < 0) {
      ++i;
    } else {
      ans.push([arr[i], arr[j], arr[x]]);
      ++i;
      --j;
      while (i < j && arr[i] === arr[i - 1]) ++i;
    }
  }
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    const leftSame = m > 0 && nums[m] === nums[m - 1];
    const rightSame = m < nums.length - 1 && nums[m] === nums[m + 1];

    if (!leftSame && !rightSame) {
      return nums[m];
    }

    if (leftSame) {
      if ((m - 1) % 2 === 0) {
        l = m + 1;
      } else {
        r = m - 2;
      }
    } else {
      if (m % 2 === 0) {
        l = m + 2;
      } else {
        r = m - 1;
      }
    }
  }

  return nums[l];
};

// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC - O(n)
// SC - O(n)
var containsDuplicate = function (nums) {
  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return false;
    } else {
      hash.set(nums[i], true);
    }
  }

  return true;
};

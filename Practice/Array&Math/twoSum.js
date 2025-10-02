/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let store = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (store.has(compliment)) {
      return [store.get(compliment), i];
    }

    store.set(nums[i], i);
  }
};

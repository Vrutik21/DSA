// 189. Rotate Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// TC - O(n)
// SC - O(n) uses the extra out array
var rotate = function (nums, k) {
  const n = nums.length;
  k %= n;
  const out = new Array(n);
  for (let i = 0; i < n; i++) {
    out[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) nums[i] = out[i];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// TC - O(n)
// SC - O(1)
var rotate = function (nums, k) {
  const n = nums.length;
  if (n <= 1) return;
  k %= n;
  if (k === 0) return;

  reverse(nums, 0, n - 1); // reverse whole array
  reverse(nums, 0, k - 1); // reverse first k
  reverse(nums, k, n - 1); // reverse rest

  function reverse(arr, l, r) {
    while (l < r) {
      const tmp = arr[l];
      arr[l] = arr[r];
      arr[r] = tmp;
      l++;
      r--;
    }
  }
};

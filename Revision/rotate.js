// 189. Rotate Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// TC - O(n)
// SC - O(n) uses the extra output array
var rotate = function (nums, k) {
  let size = nums.length;
  k = k % size;

  let out = new Array(size);
  for (let i = 0; i < size; i++) {
    out[(i + k) % size] = nums[i];
  }

  for (let i = 0; i < size; i++) {
    nums[i] = out[i];
  }
};

// Using only O(1) space
// TC - O(n)
// SC - O(1)
var rotate = function (nums, k) {
  let size = nums.length;
  k = k % size;

  // Reversing the full array
  reverseInPlace(nums, 0, nums.length - 1);

  //   Reversing the first k elements
  reverseInPlace(nums, 0, k - 1);

  //   Reversing the other half after k
  reverseInPlace(nums, k, nums.length - 1);
};

// My implementation of reverse() method
function reverseInPlace(arr, start, end) {
  while (start < end) {
    // Swap elements using a temporary variable
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move pointers closer to the middle
    start++;
    end--;
  }
}

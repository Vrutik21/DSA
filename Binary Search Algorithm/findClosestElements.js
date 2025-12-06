// 658. Find K Closest Elements

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// TC - O(n)
// SC - O(1)
var findClosestElements1 = function (arr, k, x) {
  // Solving using linear search
  let l = 0;
  let r = arr.length - 1;

  while (r - l + 1 > k) {
    if (
      Math.abs(arr[l] - x) < Math.abs(arr[r] - x) ||
      (Math.abs(arr[l] - x) == Math.abs(arr[r] - x) && arr[l] < arr[r])
    ) {
      r--;
    } else {
      l++;
    }
  }
  return arr.slice(l, r + 1);
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// TC - O(Log(N−K)) because we reduce the size by k
//  SC - O(1)
var findClosestElements = function (arr, k, x) {
  // Solving using binary search
  // Tricky to understand but there is a sliding window
  let l = 0;
  // window size should always be arr.len - k
  // since we only want k elements from our left pointer
  // So it does not matter where r is but it should not be out of bounds
  // JS treats out of bounds as false that's why arr.len - 1 should pass all tests
  // However, arr.len - k is more practical
  let r = arr.length - k;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    // Because array is sorted → arr[m] ≤ x (usually)
    // Because arr[m+k] ≥ x
    if (x - arr[m] > arr[m + k] - x) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return arr.slice(l, l + k);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements([1, 2], 1, 3));
console.log(findClosestElements([1, 2], 1, 3));

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
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
var findClosestElements = function (arr, k, x) {
  // Solving using binary search
  //   Tricky to understand but there is a sliding window
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

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

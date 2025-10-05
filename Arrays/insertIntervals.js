// 57. Insert Interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // TC - O(n)
  // SC - O(n)

  //   We can also do it in-place to save the space but the question did not mention

  //   Using Binary search to insert the newInterval
  let left = 0;
  let right = intervals.length - 1;
  let insertIndex = intervals.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (intervals[mid][0] > newInterval[0]) {
      insertIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  intervals.splice(insertIndex, 0, newInterval);

  let start = intervals[0][0];
  let end = intervals[0][1];

  let ans = [];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      ans.push([start, end]);
      start = intervals[i][0];
    }

    if (intervals[i][1] > end) {
      end = intervals[i][1];
    }
  }

  ans.push([start, end]);

  return ans;
};

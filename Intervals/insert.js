// 57. Insert Interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// TC - O(log n + n + n) = O(n)
// SC - O(n)
var insert = function (intervals, newInterval) {
  let left = 0;
  let right = intervals.length - 1;
  let insertIndex = intervals.length;

  // Find where newInterval should be inserted by start value
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (intervals[mid][0] > newInterval[0]) {
      insertIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // Insert newInterval into sorted position
  intervals.splice(insertIndex, 0, newInterval);

  let ans = [];
  let start = intervals[0][0];
  let end = intervals[0][1];

  // Merge overlapping intervals
  for (let i = 1; i < intervals.length; i++) {
    let currentStart = intervals[i][0];
    let currentEnd = intervals[i][1];

    // No overlap
    if (currentStart > end) {
      ans.push([start, end]);
      start = currentStart;
      end = currentEnd;
    } else {
      // Overlap, so extend the end if needed
      end = Math.max(end, currentEnd);
    }
  }

  ans.push([start, end]);

  return ans;
};

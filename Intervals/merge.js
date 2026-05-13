// 56. Merge Intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// TC - O(n log n) Sorting takes O(n log n) and the merging takes O(n).
// SC - O(n)
var merge = function (intervals) {
  // Sort by start value
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [];

  let start = intervals[0][0];
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let currentStart = intervals[i][0];
    let currentEnd = intervals[i][1];

    // If current interval starts after previous ends,
    // there is no overlap.
    if (currentStart > end) {
      ans.push([start, end]);

      // Start tracking a new interval
      start = currentStart;
      end = currentEnd;
    } else {
      // Intervals overlap, so extend end if needed
      end = Math.max(end, currentEnd);
    }
  }

  // Push the last tracked interval
  ans.push([start, end]);

  return ans;
};

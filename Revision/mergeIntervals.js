// 56. Merge Intervals

// Topic : Array, Intervals, Sorting

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// TC - O(n logn)
// SC - O(n)
// Push the current interval only when you find a non-overlapping interval. Then push the last interval after the loop.
var merge = function (intervals) {
  // Sort by start time so overlapping intervals come together
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [];

  // Start with the first interval as the current merged interval
  let currentStart = intervals[0][0];
  let currentEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let nextStart = intervals[i][0];
    let nextEnd = intervals[i][1];

    // Overlap: merge with current interval
    if (nextStart <= currentEnd) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      // No overlap: current interval is complete
      ans.push([currentStart, currentEnd]);

      // Start tracking the new interval
      currentStart = nextStart;
      currentEnd = nextEnd;
    }
  }

  // Push the last remaining interval
  ans.push([currentStart, currentEnd]);

  return ans;
};

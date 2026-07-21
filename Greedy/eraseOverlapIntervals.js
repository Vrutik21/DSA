// 435. Non-overlapping Intervals

// Pattern :

/**
 * @param {number[][]} intervals
 * @return {number}
 */
// TC - O(n log n)
// SC - O(1)
var eraseOverlapIntervals = function (intervals) {
  // Sort intervals by starting time
  intervals.sort((a, b) => a[0] - b[0]);

  let removals = 0;

  // End time of the interval we are currently keeping
  let previousEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const currentStart = intervals[i][0];
    const currentEnd = intervals[i][1];

    if (currentStart >= previousEnd) {
      // No overlap, so keep the current interval
      previousEnd = currentEnd;
    } else {
      // Overlap: one of the two intervals must be removed
      removals++;

      // Keep the interval that ends earlier
      // because it leaves more room for future intervals
      previousEnd = Math.min(previousEnd, currentEnd);
    }
  }

  return removals;
};

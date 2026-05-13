// 435. Non-overlapping Intervals

/**
 * @param {number[][]} intervals
 * @return {number}
 */
// TC - O(n log n)
// SC - O(1)
var eraseOverlapIntervals = function (intervals) {
  // Sort by start value
  intervals.sort((a, b) => a[0] - b[0]);

  let removals = 0;

  // End of the interval we are currently keeping
  let previousEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const currentStart = intervals[i][0];
    const currentEnd = intervals[i][1];

    // No overlap
    if (currentStart >= previousEnd) {
      previousEnd = currentEnd;
    } else {
      // Overlap found, so one interval must be removed
      removals++;

      // Since there is overlap, remove one interval and continue with the interval that ends earlier.
      // That gives the best chance to keep more future intervals otherwise they will get overlap into
      // bigger ends even if they were not supposed to.
      // Example - [1,100], [2,12], [11,22]
      // Keep the interval with smaller end
      previousEnd = Math.min(currentEnd, previousEnd);
    }
  }

  return removals;
};

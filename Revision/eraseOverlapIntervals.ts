// 435. Non-overlapping Intervals

// TC - O(n log n)
// SC - O(1)
// Pattern : Greedy + intervals
// At each step, make the choice that gives us the best opportunity going forward.
function eraseOverlapIntervals(intervals: number[][]): number {
  // Sort intervals by their starting value
  intervals.sort((a, b) => a[0] - b[0]);

  let prevEnd = intervals[0][1];

  let removals = 0;

  for (let i = 1; i < intervals.length; i++) {
    let currentStart = intervals[i][0];
    let currentEnd = intervals[i][1];

    if (prevEnd > currentStart) {
      // Current interval overlaps with previous interval
      removals++;
      // Keep the interval that ends earlier because
      // it gives us more room for future intervals
      prevEnd = Math.min(prevEnd, currentEnd);
    } else {
      // No overlap, so current interval becomes
      // the interval we compare against next
      prevEnd = currentEnd;
    }
  }

  return removals;
}

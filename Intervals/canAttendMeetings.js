// 252. Meeting Rooms

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  // TC - O(n log n)
  // SC - O(1) auxiliary, ignoring sorting internals
  canAttendMeetings(intervals) {
    // If there are 0 or 1 meetings, there cannot be any conflict
    if (intervals.length <= 1) return true;

    // Sort meetings by start time
    intervals.sort((a, b) => a.start - b.start);

    // Compare each meeting with the previous meeting
    for (let i = 1; i < intervals.length; i++) {
      let previousEnd = intervals[i - 1].end;
      let currentStart = intervals[i].start;

      // If current meeting starts before previous meeting ends,
      // both meetings overlap
      if (currentStart < previousEnd) {
        return false;
      }
    }

    // No overlaps found
    return true;
  }
}

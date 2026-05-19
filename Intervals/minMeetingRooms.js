// 253. Meeting Rooms II

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
   * @returns {number}
   */
  // TC - O(n log n)
  // Because we sort the starts and ends arrays
  // SC - O(n)
  // Because we create two extra arrays:
  minMeetingRooms(intervals) {
    // If there are no meetings, we need 0 rooms.
    // If there is only one meeting, we need only 1 room.
    if (intervals.length <= 1) return intervals.length;

    // Separate all start times and end times.
    // This helps us process meetings in chronological order.
    let starts = intervals.map((interval) => interval.start);
    let ends = intervals.map((interval) => interval.end);

    // Sort start times to know when meetings begin.
    // Sort end times to know when rooms become free.
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let startPointer = 0;
    let endPointer = 0;

    // roomsInUse = number of rooms currently occupied
    let roomsInUse = 0;

    // maxRooms = maximum rooms used at the same time
    let maxRooms = 0;

    // Process every meeting start time
    while (startPointer < intervals.length) {
      // If the next meeting starts before the earliest meeting ends,
      // it means there is an overlap, so we need one more room.
      if (starts[startPointer] < ends[endPointer]) {
        roomsInUse++;
        maxRooms = Math.max(maxRooms, roomsInUse);
        startPointer++;
      } else {
        // Otherwise, the earliest meeting has ended.
        // So one room becomes free and can be reused.
        roomsInUse--;
        endPointer++;
      }
    }

    return maxRooms;
  }
}

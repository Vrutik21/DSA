// 981. Time Based Key-Value Store

// TC - O(log n)
// SC - O(n)
class TimeMap {
  private map = new Map<string, Array<[number, string]>>();

  set(key: string, value: string, timestamp: number): void {
    const entries = this.map.get(key);

    if (!entries) {
      this.map.set(key, [[timestamp, value]]);
      return;
    }

    // Increasing timestamps keep each key's entries sorted.
    entries.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    const entries = this.map.get(key);

    if (!entries) return "";

    let result = "";
    let left = 0;
    let right = entries.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      const [midTime, midValue] = entries[mid];

      if (midTime <= timestamp) {
        // Save this valid value and look for a newer one.
        result = midValue;
        left = mid + 1;
      } else {
        // Timestamp is too large; search earlier entries.
        right = mid - 1;
      }
    }

    // Remains empty if no timestamp was small enough.
    return result;
  }
}

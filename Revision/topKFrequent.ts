// 347. Top K Frequent Elements

// TC - O(n)
// SC - O(n)
// Pattern : Hash Map + Bucket Sort
function topKFrequent(nums: number[], k: number): number[] {
  // num -> number of occurrences
  let freqMap = new Map<number, number>();

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Index represents frequency.
  // buckets[3] contains numbers appearing 3 times.
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  // Put every number into the bucket corresponding to its frequency.
  for (const [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  const results: number[] = [];

  // Start from the highest possible frequency.
  for (let freq = buckets.length - 1; freq > 0 && results.length < k; freq--) {
    for (const num of buckets[freq]) {
      results.push(num);

      // Stop once we collected k elements.
      if (results.length === k) break;
    }
  }

  return results;
}

// 692. Top K Frequent Words

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const freqMap = new Map();

  // Count frequency
  for (let w of words) {
    freqMap.set(w, (freqMap.get(w) || 0) + 1);
  }

  // Buckets
  const buckets = Array(words.length + 1)
    .fill(0)
    .map(() => []);

  for (let [word, freq] of freqMap) {
    buckets[freq].push(word);
  }

  // Sort each bucket lexicographically
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort();
  }

  // Collect results
  const result = [];
  for (let freq = buckets.length - 1; freq > 0 && result.length < k; freq--) {
    for (let word of buckets[freq]) {
      result.push(word);
      if (result.length === k) break;
    }
  }

  return result;
};

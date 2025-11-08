// 76. Minimum Window Substring

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// TC - O(M+N)
// SC - O(k) at most k distinct characters from t
var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  let left = 0;
  let right = 0;
  let currentMin = "";
  let bestLen = Infinity;

  //   plus minus technique
  // right pointer will decrement items and decrement count when 0
  // left pointer will increment items and increment count when > 0
  let freqMap = new Map();
  for (let ch of t) {
    freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
  }

  let count = freqMap.size;

  while (right < s.length) {
    let rChar = s[right];

    if (freqMap.has(rChar)) {
      freqMap.set(rChar, freqMap.get(rChar) - 1);
      if (freqMap.get(rChar) === 0) count--;
    }
    right++;

    while (count === 0) {
      if (right - left < bestLen) {
        bestLen = right - left;
        currentMin = s.slice(left, right);
      }

      let lChar = s[left];
      if (freqMap.has(lChar)) {
        freqMap.set(lChar, freqMap.get(lChar) + 1);
        if (freqMap.get(lChar) > 0) count++;
      }
      left++;
    }
  }

  return currentMin;
};

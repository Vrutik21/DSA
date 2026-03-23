// 76. Minimum Window Substring

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// TC - O(n + m)
// SC - O(k)
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  let need = new Map();
  for (const ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  let required = need.size; // number of unique chars we need to satisfy
  let formed = 0; // number of unique chars currently satisfied

  let left = 0;
  let right = 0;
  let start = 0;
  let minLen = Infinity;

  let window = new Map();

  while (right < s.length) {
    const rightChar = s[right];

    // Add current char into the window
    window.set(rightChar, (window.get(rightChar) || 0) + 1);

    // If this char is needed and now exactly matches required frequency,
    // then one more required character is satisfied
    if (need.has(rightChar) && window.get(rightChar) === need.get(rightChar)) {
      formed++;
    }

    // Try to shrink the window while it is valid
    while (formed === required) {
      const windowLen = right - left + 1;

      // Update best answer
      if (windowLen < minLen) {
        minLen = windowLen;
        start = left;
      }

      const leftChar = s[left];

      // Remove left char from window
      window.set(leftChar, window.get(leftChar) - 1);

      // If this character was required and now dropped below required count,
      // the window is no longer valid
      if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
        formed--;
      }

      left++;
    }

    right++;
  }

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
};

// TC - O(M+N)
// SC - O(k) at most k distinct characters from t
var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  let left = 0;
  let right = 0;
  let currentMin = "";
  let bestLen = Infinity;

  // plus minus technique
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

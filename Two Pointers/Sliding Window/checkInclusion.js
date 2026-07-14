// 567 Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion1 = function (s1, s2) {
  // My solution using map
  // TC - O(M + N)
  // SC - O(1)
  const s1Store = new Map();

  for (let i = 0; i < s1.length; i++) {
    s1Store.set(s1[i], s1Store.get(s1[i]) + 1 || 1);
  }

  let windowStore = new Map();
  let i = 0;
  let j = 0;

  while (j < s2.length) {
    if (j - i + 1 <= s1.length) {
      if (s1Store.has(s2[j])) {
        const curr = s2[j];
        let currCount = windowStore.get(curr) || 0;

        // shrink from left instead of clear
        if (currCount + 1 > s1Store.get(curr)) {
          const leftChar = s2[i];
          windowStore.set(leftChar, windowStore.get(leftChar) - 1);
          if (windowStore.get(leftChar) === 0) {
            windowStore.delete(leftChar);
          }
          i++;
          currCount = windowStore.get(curr) || 0;
        }

        // add current char
        windowStore.set(curr, currCount + 1);

        // check match
        if (j - i + 1 === s1.length) {
          let ok = true;
          for (const [ch, needCnt] of s1Store) {
            if ((windowStore.get(ch) || 0) !== needCnt) {
              ok = false;
              break;
            }
          }
          if (ok) return true;
        }

        j++;
      } else {
        windowStore.clear();
        // move past invalid char
        i = j + 1;
        j++;
      }
    } else {
      // shrink window if bigger than s1
      const leftChar = s2[i];
      windowStore.set(leftChar, windowStore.get(leftChar) - 1);
      if (windowStore.get(leftChar) === 0) {
        windowStore.delete(leftChar);
      }
      i++;
    }
  }

  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// TC - O(n)
// SC - O(1)
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let hashStr = new Array(26).fill(0);
  let hashWin = new Array(26).fill(0);

  let windowLen = s1.length;

  // Build frequency map for s1 and first window of s2
  for (let i = 0; i < windowLen; i++) {
    hashStr[s1.charCodeAt(i) - 97]++;
    hashWin[s2.charCodeAt(i) - 97]++;
  }

  let left = 0;
  let right = windowLen - 1;

  while (right < s2.length) {
    // If both frequency arrays match, current window is a permutation
    if (isHashSame(hashStr, hashWin)) {
      return true;
    }

    // Remove the left character from current window
    hashWin[s2.charCodeAt(left) - 97]--;
    left++;

    // Move right pointer to include next character
    right++;

    // Add new right character only if it exists
    if (right < s2.length) {
      hashWin[s2.charCodeAt(right) - 97]++;
    }
  }

  return false;
};

var isHashSame = function (hashStr, hashWin) {
  for (let i = 0; i < 26; i++) {
    if (hashStr[i] !== hashWin[i]) {
      return false;
    }
  }

  return true;
};

console.log(checkInclusion("ab", "bba"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("adc", "dcda"));

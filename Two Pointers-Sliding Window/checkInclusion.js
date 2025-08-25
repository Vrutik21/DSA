// 567
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
var checkInclusion = function (s1, s2) {
  // Akshay's solution
  // TC - O(n)
  // SC - (1)
  let HashS = Array(26).fill(0);
  let HashW = Array(26).fill(0);
  let window_len = s1.length;

  for (let i = 0; i < window_len; i++) {
    ++HashS[s1.charCodeAt(i) - 97];
    ++HashW[s2.charCodeAt(i) - 97];
  }

  let i = 0;
  let j = window_len - 1;

  while (j < s2.length) {
    if (isHashSame(HashS, HashW)) {
      return true;
    } else {
      --HashW[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++HashW[s2.charCodeAt(j) - 97];
    }
  }

  return false;
};

var isHashSame = function (HashS, HashW) {
  for (let i = 0; i < 26; i++) {
    if (HashS[i] !== HashW[i]) {
      return false;
    }
  }

  return true;
};

console.log(checkInclusion("ab", "bba"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("adc", "dcda"));

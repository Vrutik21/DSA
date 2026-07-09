// 438. Find All Anagrams in a String

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// TC - O(n * k) where k is at most 26 because of small letters
// SC - O(k)
var findAnagrams = function (s, p) {
  if (!s || !p) return [];

  if (s.length < p.length) return [];

  let store = new Map();

  // Count frequency of each character in p
  for (let ch of p) {
    store.set(ch, (store.get(ch) || 0) + 1);
  }

  let currentWindow = new Map();

  let ans = [];

  let left = 0;

  // Move right pointer through the string
  for (let right = 0; right < s.length; right++) {
    let rightChar = s[right];

    // Add current right character into the window
    currentWindow.set(rightChar, (currentWindow.get(rightChar) || 0) + 1);

    // If window size becomes bigger than p.length,
    // remove the leftmost character and move left forward
    if (right - left + 1 > p.length) {
      let leftChar = s[left];

      currentWindow.set(leftChar, currentWindow.get(leftChar) - 1);

      // If count becomes 0, remove it from map
      // This keeps the map clean
      if (currentWindow.get(leftChar) === 0) {
        currentWindow.delete(leftChar);
      }

      left++;
    }

    // If window size is exactly p.length,
    // check whether this window is an anagram
    if (right - left + 1 === p.length) {
      if (isSameMap(store, currentWindow)) {
        ans.push(left);
      }
    }
  }

  return ans;
};

// Helper function to compare both maps
function isSameMap(store, currentWindow) {
  // If number of unique characters is different,
  // they cannot be equal
  if (store.size !== currentWindow.size) return false;

  // Check every character required by p
  for (let [key, value] of store) {
    if (currentWindow.get(key) !== value) {
      return false;
    }
  }

  return true;
}

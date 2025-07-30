/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const store = new Map();

  for (let i = 0; i < s.length; i++) {
    store.set(s[i], (store.get(s[i]) || 0) + 1);
  }

  for (let j = 0; j < t.length; j++) {
    if (!store.has(t[j]) || store.get(t[j]) === 0) {
      return false;
    } else {
      let val = store.get(t[j]);
      store.set(t[j], --val);
    }
  }

  return true;
};

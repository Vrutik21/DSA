/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const storeS = new Map();
  const storeT = new Map();

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    if (!storeS.has(c1) && !storeT.has(c2)) {
      storeS.set(c1, c2);
      storeT.set(c2, c1);
    }

    let storeSVal = storeS.get(c1);
    let storeTVal = storeT.get(c2);

    if (storeSVal !== c2 || storeTVal !== c1) {
      return false;
    }
  }

  return true;
};

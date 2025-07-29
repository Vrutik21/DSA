/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  let prfx = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prfx) !== 0) {
      prfx = prfx.slice(0, -1);
      if (prfx === "") return "";
    }
  }

  return prfx;
};
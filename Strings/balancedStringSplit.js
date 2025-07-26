/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  // Approach 1
  let rTotal = 0;
  let lTotal = 0;
  let Total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      rTotal++;
    } else {
      lTotal++;
    }

    if (rTotal === lTotal) {
      Total++;
      rTotal = 0;
      lTotal = 0;
    }
  }

  return Total;
};

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  // Approach 2 using a temp +- logic
  let temp = 0;
  let Total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      ++temp;
    } else {
      --temp;
    }

    if (temp === 0) {
      ++Total;
    }
  }

  return Total;
};

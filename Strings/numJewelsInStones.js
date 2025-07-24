/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // Brute force approach
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        count++;
      }
    }
  }

  return count;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // Using a hash set/map/table
  let jewelsHash = new Set();

  for (let j = 0; j < jewels.length; j++) {
    jewelsHash.add(jewels[j]);
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelsHash.has(stones[i])) count++;
  }

  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));

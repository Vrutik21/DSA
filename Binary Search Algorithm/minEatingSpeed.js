// 875. Koko Eating Bananas

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// Binary search on answer pattern
// TC - O(nlog(maxPile))
// Binary search steps: log(maxPile)
// SC - O(1)
var minEatingSpeed = function (piles, h) {
  let maxPile = Math.max(...piles);

  let low = 1;
  let high = maxPile;

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (canEat(mid, piles, h)) {
      high = mid; // try lower speed
    } else {
      low = mid + 1; // need faster speed
    }
  }

  return low;
};

// TC - O(n)
function canEat(speed, piles, h) {
  let hours = 0;

  for (let pile of piles) {
    hours += Math.ceil(pile / speed);
  }

  return hours <= h;
}

// Input: piles = [3,6,7,11], h = 8
// Output: 4

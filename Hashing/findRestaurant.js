// 599. Minimum Index Sum of Two Lists

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// TC - O(n+m)
// SC - O(n)
var findRestaurant = function (list1, list2) {
  let store = new Map();
  let minSumIndex = Infinity;
  let result = [];

  for (let i = 0; i < list1.length; i++) {
    store.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    if (store.has(list2[i])) {
      let currentSumIndex = store.get(list2[i]) + i;
      if (currentSumIndex === minSumIndex) {
        result.push(list2[i]);
      }

      if (currentSumIndex < minSumIndex) {
        result = [];
        result.push(list2[i]);
        minSumIndex = Math.min(minSumIndex, store.get(list2[i]) + i);
      }
    }
  }

  return result;
};

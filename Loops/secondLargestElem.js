/**
 *
 * @param {Array<number>} arr
 */
function secondLargestElem(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const arr = [2, 4, 6, 7, 7, 8, 9, 9];

console.log(secondLargestElem(arr));

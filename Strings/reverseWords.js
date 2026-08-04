// 151. Reverse Words in a String

/**
 * @param {string} s
 * @return {string}
 */
// TC - O(n)
// SC - O(n)
// O(1) space is not possible with the given JavaScript string input
// because JavaScript strings are immutable and cannot be modified in-place.
// split(), filter(), reverse(), and join() create additional arrays or strings.
var reverseWords = function (s) {
  const words = s
    // Remove extra spaces from the beginning and end
    .trim()

    // Split the sentence at each space.
    // Multiple spaces create empty strings in the array.
    .split(" ")

    // Remove the empty strings created by multiple spaces
    .filter((word) => word !== "");

  // Reverse the order of the words
  words.reverse();

  // Combine the words using exactly one space
  return words.join(" ");
};

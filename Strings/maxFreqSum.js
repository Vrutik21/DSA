/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let vowels = ["a", "e", "i", "o", "u"];
  let consoStore = new Map();
  let vowelStore = new Map();

  for (let j = 0; j < vowels.length; j++) {
    vowelStore.set(vowels[j], 0);
  }

  let vowelCount = 0;
  let consoCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowelStore.has(s[i])) {
      let curr = vowelStore.get(s[i]);
      vowelStore.set(s[i], ++curr);

      vowelCount = Math.max(vowelCount, curr);
    } else if (consoStore.has(s[i])) {
      let curr2 = consoStore.get(s[i]);
      consoStore.set(s[i], ++curr2);

      consoCount = Math.max(consoCount, curr2);
    } else {
      consoStore.set(s[i], 1);
      if (consoCount < 1) {
        consoCount++;
      }
    }
  }

  return vowelCount + consoCount;
};

console.log(maxFreqSum("successes"));

/**
 *
 * @param {number} n
 */
function palindrom(n) {
  let orgnl = n;
  let rvrsd = 0;

  while (n > 0) {
    rvrsd = rvrsd * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return orgnl === rvrsd;
}

console.log(palindrom(489));

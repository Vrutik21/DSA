/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;
  let negative = x < 0;

  x = Math.abs(x);

  while (x > 0) {
    // Getting the last digit
    let last = x % 10;
    // Adding the last digit to reverse number by multiplying the reverse number with 10 to make addition correct
    rev = rev * 10 + last;
    // Using floor to cut down the decimal values
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  //   let limit = 2 ** 31;

  if (rev < -limit || rev > limit - 1) return 0;

  return negative ? -rev : rev;
};

console.log(reverse(1534236469));
console.log(reverse(-120));

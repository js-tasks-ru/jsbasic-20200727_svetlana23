/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let a = n;
  let c = 1;

  for (let i = 0; a > 1; i++) {
    let b = a *(a - 1);
    a = a - 2;
    c = b * c;
  }
  return c;
}

/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let arr = [];
  let a = n;
  for (let i = 0; a > 0; i++) {
    arr.push(a);
    a = a - 1;
  }
  let result = arr.reduce(function(el, next) {
    return el * next;
  }, 1);
  return result;
}
factorial(5);

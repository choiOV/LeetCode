/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const original = x.toString();
  const reversed = original.split('').reverse().join('');

  return original === reversed;
};
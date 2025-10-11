/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hash = {};

  for (const char of s) {
    hash[char] = hash[char] + 1 || 1;
  }

  let result = 0;
  let hasOdd = false;
  for (const key in hash) {
    if (hash[key] % 2 === 1) {
      hasOdd = true;
    }

    result += Math.floor(hash[key] / 2);
  }

  return hasOdd ? result * 2 + 1 : result * 2;
};
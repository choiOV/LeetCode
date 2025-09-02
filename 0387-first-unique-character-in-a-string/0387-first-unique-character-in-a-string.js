/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const hash = {};

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }

  return -1;
};

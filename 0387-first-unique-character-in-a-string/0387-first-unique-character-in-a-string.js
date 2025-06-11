/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const hash = {};

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  let onlyOne = "";

  for (const char of s) {
    if (hash[char] === 1) {
      onlyOne = char;
      break;
    }
  }

  return [...s].findIndex((char) => char === onlyOne);
};
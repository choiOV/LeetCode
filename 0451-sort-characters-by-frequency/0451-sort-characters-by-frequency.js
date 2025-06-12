/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const hash = {};

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  const sortedHash = Object.entries(hash).sort(([k1, v1], [k2, v2]) => v2 - v1);
  let result = "";

  for (const property of sortedHash) {
    result += property[0].repeat(property[1]);
  }

  return result
};
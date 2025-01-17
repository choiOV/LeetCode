/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hash = {};
  
  for (const str of s) {
    hash[str] = (hash[str] || 0) + 1;
  }

  for (const str of t) {
    if (hash[str] === undefined) return false;
    hash[str] -= 1;
  }

  for (const count in hash) {
    if (count > 0) return false;
  }

  return true;
};
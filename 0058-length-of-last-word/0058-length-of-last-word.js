/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const result = s.trimEnd().split(" ");

  return result[result.length - 1].length;
};
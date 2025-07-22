/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const ascG = [...g].sort((a, b) => a - b);
  const ascS = [...s].sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < ascG.length && j < ascS.length) {
    if (ascG[i] <= ascS[j]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }

  return count;
};
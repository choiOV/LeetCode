/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// 풀이 2회차
var kClosest = function (points, k) {
  const result = points
    .sort(([a1, a2], [b1, b2]) => {
      return a1 ** 2 + a2 ** 2 - (b1 ** 2 + b2 ** 2);
    })
    .slice(0, k);

  return result;
};
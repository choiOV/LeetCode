/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = {};
  const diff = nums.length / 2;

  nums.forEach((c) => {
    hash[c] = hash[c] + 1 || 1;
  });

  for (const [key, count] of Object.entries(hash)) {
    if (count > diff) return Number(key);
  }
};
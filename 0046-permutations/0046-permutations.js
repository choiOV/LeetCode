/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) return [[]];

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const fixed = nums[i];
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));
    const partials = permute(rest);

    for (let p of partials) {
      result.push([fixed, ...p]);
    }
  }

  return result;
};
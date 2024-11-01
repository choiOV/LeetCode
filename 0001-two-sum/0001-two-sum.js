/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let pointer = 0;
  let compared = 0;

  for (let i = 1; i < nums.length; i++) {
    compared = nums[pointer];
    compared += nums[i];

    if (compared === target) {
      return [pointer, i];
    } else if (i === nums.length - 1) {
      pointer++;
      i = pointer;
    }
  }
};
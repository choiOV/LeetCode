/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [nums.indexOf(target - nums[i]), i];
    }
    
    hash[nums[i]] = target - nums[i];
  }
};
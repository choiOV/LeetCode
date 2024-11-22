/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const pair_idx = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in pair_idx) {
            return [i, pair_idx[target - nums[i]]];
        }

        pair_idx[nums[i]] = i;
    }
};
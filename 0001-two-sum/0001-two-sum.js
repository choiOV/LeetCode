/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let pointer = 1;

    for (let i = 0; i < nums.length; i++) {
        if (i === pointer) {
            pointer++;
        }

        if (nums[i] + nums[pointer] === target) {
            return [i, pointer];
        } else {
            pointer++;
        }

        if (pointer > nums.length) {
            pointer = 0;
        } else {
            i -= 1;
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = 0;

  for (const num of nums) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
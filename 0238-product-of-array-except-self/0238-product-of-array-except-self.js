/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    answer[j] *= right;
    right *= nums[j];
  }

  return answer;
};
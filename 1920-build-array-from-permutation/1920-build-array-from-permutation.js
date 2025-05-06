var buildArray = function (nums) {
    return nums.map((e, i) => nums[nums[i]]);
};
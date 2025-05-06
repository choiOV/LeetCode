var buildArray = function (nums) {
    const result = [...nums];

    return result.map((e, i) => {
        return nums[nums[i]];
    });
};
const reduce = (nums, fn, init) => {
  let acc = init;

  if (nums.length === 0) {
    return init;
  }

  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  
  return acc;
};
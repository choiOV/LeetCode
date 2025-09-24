var threeSum = function (nums) {
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let j = i + 1;
    let k = sortedNums.length - 1;

    while (j < k) {
      const x = sortedNums[i];
      const y = sortedNums[j];
      const z = sortedNums[k];

      if (y + z < -x) {
        j++;
      } else if (y + z > -x) {
        k--;
      } else {
        result.push([x, y, z]);

        while (j < k && sortedNums[j] === sortedNums[j + 1]) {
          j++;
        }
        while (j < k && sortedNums[k] === sortedNums[k - 1]) {
          k--;
        }

        j++;
        k--;
      }
    }
  }

  return result;
};
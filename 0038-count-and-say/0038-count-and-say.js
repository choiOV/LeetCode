/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const groupHelper = (nums) => {
    const result = [];
    let count = 1;

    for (let i = 1; i <= nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        result.push([nums[i - 1], count]);
        count = 1;
      } else {
        count++;
      }
    }

    return result;
  };

  const createNextAnt = (group) =>
    group.map(([num, count]) => `${count}${num}`).join("");

  let result = "1";
  for (let i = 1; i < n; i++) {
    const grouped = groupHelper(result);
    console.log(grouped);
    result = createNextAnt(grouped);
  }

  return result;
};
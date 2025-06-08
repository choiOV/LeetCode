/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const digitsPlusOne = String(Number([...digits].join("")) + 1);
  const result = digitsPlusOne.split("").map((num) => Number(num));

  return result;
};
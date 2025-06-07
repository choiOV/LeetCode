/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const digitsPlusOne = String(BigInt([...digits].join("")) + BigInt(1));
  const result = digitsPlusOne.split("").map((num) => Number(num));

  return result;
};
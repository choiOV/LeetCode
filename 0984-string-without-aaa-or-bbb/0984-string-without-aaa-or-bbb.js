/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  let string = "";
  let aCounter = a;
  let bCounter = b;

  while (aCounter > 0 || bCounter > 0) {
    const length = string.length;

    if (length >= 2 && string[length - 1] === string[length - 2]) {
      const lastChar = string[length - 1];

      if (lastChar === "a" && bCounter > 0) {
        string += "b";
        bCounter--;
      } else if (lastChar === "b" && aCounter > 0) {
        string += "a";
        aCounter--;
      }
    } else {
      if (aCounter >= bCounter && aCounter > 0) {
        string += "a";
        aCounter--;
      } else if (bCounter > 0) {
        string += "b";
        bCounter--;
      }
    }
  }

  return string;
};
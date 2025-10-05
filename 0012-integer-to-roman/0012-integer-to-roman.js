/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const strNum = String(num);
  const strNumDigit = strNum.length;

  let result = "";

  for (let i = 0; i < strNumDigit; i++) {
    const nthPlace = strNum[i].padEnd(strNumDigit - i, "0");

    switch (true) {
      case nthPlace < 5:
        if (nthPlace === "4") {
          result += "IV";
          break;
        }

        result += "I".repeat(nthPlace);
        break;
      case 5 <= nthPlace && nthPlace < 10:
        if (nthPlace === "9") {
          result += "IX";
          break;
        }

        result += "V" + "I".repeat(nthPlace - 5);
        break;
      case 10 <= nthPlace && nthPlace < 50:
        if (nthPlace === "40") {
          result += "XL";
          break;
        }

        result += "X".repeat(nthPlace[0]);
        break;
      case 50 <= nthPlace && nthPlace < 100:
        if (nthPlace === "90") {
          result += "XC";
          break;
        }

        result += "L" + "X".repeat(nthPlace[0] - 5);
        break;
      case 100 <= nthPlace && nthPlace < 500:
        if (nthPlace === "400") {
          result += "CD";
          break;
        }

        result += "C".repeat(nthPlace[0]);
        break;
      case 500 <= nthPlace && nthPlace < 1000:
        if (nthPlace === "900") {
          result += "CM";
          break;
        }

        result += "D" + "C".repeat(nthPlace[0] - 5);
        break;
      case 1000 <= nthPlace:
        result += "M".repeat(nthPlace[0]);
        break;
    }
  }

  return result;
};
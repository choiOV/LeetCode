/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let res = s.replaceAll(" ", "");
  console.log(res)
  
  const a = res.toLowerCase().split("");
  console.log(a)
  
  const b = a.filter((str) => {
    if (
      str === "a" ||
      str === "b" ||
      str === "c" ||
      str === "d" ||
      str === "e" ||
      str === "f" ||
      str === "g" ||
      str === "h" ||
      str === "i" ||
      str === "j" ||
      str === "k" ||
      str === "l" ||
      str === "m" ||
      str === "n" ||
      str === "o" ||
      str === "p" ||
      str === "q" ||
      str === "r" ||
      str === "s" ||
      str === "t" ||
      str === "u" ||
      str === "v" ||
      str === "w" ||
      str === "x" ||
      str === "y" ||
      str === "z" ||
      isNaN(str) === false
    ) {
      return str;
    }
  });
  
  let index = b.length - 1;
  let result = true;
  const c = [...b].forEach((e, i, a) => {
    if (e !== a[index]) {
      result = false;
      return;
    }

    index -= 1;
  });

  return result;
};
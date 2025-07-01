/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const bracket of s) {
    switch (bracket) {
      case "(":
      case "{":
      case "[":
        stack.push(bracket);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
    }
  }

  return stack.length === 0 ? true : false;
};
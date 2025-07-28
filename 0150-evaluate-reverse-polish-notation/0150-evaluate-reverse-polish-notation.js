/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const mappedOperator = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "/": (a, b) => Math.trunc(b / a),
    "*": (a, b) => b * a,
  };

  for (const target of tokens) {
    if (target in mappedOperator) {
      const result = mappedOperator[target](stack.pop(), stack.pop());
      stack.push(result);
    } else {
      stack.push(Number(target));
    }
  }

  return stack[0];
};
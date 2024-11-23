/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 1) return false;

    const arr = [...s];
    const stack = [];

    for (const falind of arr) {
        if (falind === "(" || falind === "[" || falind === "{") {
            stack.push(falind);
        } else if (
            stack[stack.length - 1] + falind === "()" ||
            stack[stack.length - 1] + falind === "[]" ||
            stack[stack.length - 1] + falind === "{}"
        ) {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length !== 0) return false;

    return true;
};
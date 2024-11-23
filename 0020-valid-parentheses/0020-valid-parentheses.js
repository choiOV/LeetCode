/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;

    const stack = [];

    for (const bracket of s) {
        if (bracket === "(" || bracket === "[" || bracket === "{") {
            stack.push(bracket);
        } else if (
            stack[stack.length - 1] + bracket === "()" ||
            stack[stack.length - 1] + bracket === "[]" ||
            stack[stack.length - 1] + bracket === "{}"
        ) {
            stack.pop();
        } else {
            return false;
        }
    }

    return !stack.length;
};
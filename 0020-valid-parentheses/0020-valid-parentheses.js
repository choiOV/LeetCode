/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const arrS = s.split("");
    const stack = [];

    for (const bracket of arrS) {
        if (bracket === "(" || bracket === "[" || bracket === "{") {
            stack.push(bracket);
        } else if (bracket === ")" || bracket === "]" || bracket === "}") {
            if (stack.length === 0) {
                return false;
            } else if (
                (bracket === ")" && stack[stack.length - 1] === "(") ||
                (bracket === "}" && stack[stack.length - 1] === "{") ||
                (bracket === "]" && stack[stack.length - 1] === "[")
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) return true;

    return false;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;

    const hash = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    const stack = [];

    for (const bracket of s) {
        if (bracket in hash) {
            if (hash[bracket] !== stack.pop()) return false;
        } else {
            stack.push(bracket);
        }
    }

    return !stack.length;
};
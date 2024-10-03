/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const object = {
        toBe: (otherVal) => {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            }
            return true
        },
        notToBe: (otherVal) => {
            if (val === otherVal) {
                throw new Error("Equal");
            }
            return true;
        }
    }
    return object;
}


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
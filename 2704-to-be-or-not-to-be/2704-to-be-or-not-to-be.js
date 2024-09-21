/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const object = {
        toBe: (val) => {
            if (val) return true
            if (!val) {
                throw new Error("Not Equal");
            } else if (Object.keys(val).length === 0) {
                throw new Error("Not Equal");
            }
        },
        notToBe: (val) => {
            if (!val) {
                return true
            } else if (typeof val === "object") {
                return true;
            }


            throw new Error("Equal");
        }
    }

    return object;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    if (!arr.length) return arr;
    if (arr.length < size) return [[...arr]];

    const result = [];

    while (arr.length > 0) {
        result.push(arr.splice(0, size));
    }

    return result;
};
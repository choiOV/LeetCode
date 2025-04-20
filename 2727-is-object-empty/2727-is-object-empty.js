/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    return !Boolean(Object.keys(obj).length);
};
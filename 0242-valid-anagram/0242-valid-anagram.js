/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if ([...s].sort().join("") === [...t].sort().join("")) return true;

    return false;
};
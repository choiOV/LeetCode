/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (let i = 0; i < s.length - 1; i++) {
        const char = s[i];

        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < t.length - 1; i++) {
        const char = t[i];

        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 0) return true;

    let start = 0;
    let last = s.length - 1;

    const isLetterOrDigit = (c) => {
        const code = c.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122)
        );
    };

    while (start <= last) {
        const currFirst = s[start];
        const currLast = s[last];

        if (!isLetterOrDigit(currFirst)) {
            start++;
        } else if (!isLetterOrDigit(currLast)) {
            last--;
        } else {
            if (currFirst.toLowerCase() !== currLast.toLowerCase()) {
                return false;
            }

            start++;
            last--;
        }
        return true;
    }
};
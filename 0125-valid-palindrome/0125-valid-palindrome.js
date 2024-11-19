/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 0) {
        return true;
    }
    let start = 0;
    let last = s.length - 1;
    while (start <= last) {
        let currFirst = s[start];
        let currLast = s[last];
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
    }
    return true;
}

function isLetterOrDigit(c) {
    const code = c.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) ||    // 숫자 (0-9)
        (code >= 65 && code <= 90) ||    // 대문자 (A-Z)
        (code >= 97 && code <= 122)      // 소문자 (a-z)
    );
};
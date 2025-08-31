var isPalindrome = function (s) {
  const isLetterOrNumber = (string) => {
    const asciiS = string.charCodeAt();
    if (
      (48 <= asciiS && asciiS <= 57) ||
      (65 <= asciiS && asciiS <= 90) ||
      (97 <= asciiS && asciiS <= 122)
    ) {
      return true;
    }
  };

  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (!isLetterOrNumber(s[left])) {
      left++;
    } else if (!isLetterOrNumber(s[right])) {
      right--;
    } else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      } else {
        left++;
        right--;
      }
    }
  }
  return true;
};
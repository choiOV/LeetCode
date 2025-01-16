var isPalindrome = function (s) {
  const newS = [...s];

  const a = newS
    .filter((s) => {
      if (97 <= s.charCodeAt() && s.charCodeAt() <= 122) {
        return s;
      } else if (65 <= s.charCodeAt() && s.charCodeAt() <= 90) {
        return s;
      } else if (48 <= s.charCodeAt() && s.charCodeAt() <= 57) {
        return s;
      }
    })
    .join("")
    .toLowerCase();
  console.log(a);

  let left = 0;
  let right = a.length - 1;

  while (left <= right) {
    if (a[left] !== a[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
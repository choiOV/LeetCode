const scoreOfString = (s) => {
  let result = 0;

  for (let i = 1; i < s.length; i++) {
    result += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
  }

  return result;
};
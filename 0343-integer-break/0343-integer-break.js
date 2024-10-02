const integerBreak = (n) => {
  if (n <= 3) {
    return n - 1;
  }

  let integer = n;
  const result = [];

  while (integer > 0) {
    if (integer - 3 > 1 || integer - 3 === 0) {
      integer = integer - 3;
      result.push(3);
    } else {
      integer = integer - 2;
      result.push(2);
    }
  }

  return result.reduce((acc, cValue) => {
    return acc * cValue;
  });
};
var removeDuplicates = function (s, k) {
  const stack = [];

  for (const str of s) {
    stack.push(str);

    if (stack.length >= k) {
      const checkSameCharArr = stack.slice(-k);

      if (checkSameCharArr.every((e, i, a) => a[0] === e)) {
        stack.splice(-k);
      }
    }
  }

  return stack.join("");
};

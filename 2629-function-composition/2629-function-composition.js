const compose = (functions) => {
  return function (x) {
    if (functions.length === 0) return x;
    let result;

    for (let i = functions.length - 1; i >= 0; i--) {
      if (!result) {
        result = functions[i](x);
      } else {
        result = functions[i](result);
      }
    }

    return result;
  };
};
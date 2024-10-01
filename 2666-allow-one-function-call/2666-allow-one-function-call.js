const once = (fn) => {
  let result;

  return function (...args) {
    if (!result) {
      result = fn(...args);
      
      return result;
    } else {
      return undefined;
    }
  };
};
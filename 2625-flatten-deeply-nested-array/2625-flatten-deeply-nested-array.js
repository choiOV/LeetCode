var flat = function (arr, n) {
  if (n === 0) return arr;

  const result = [];
  let depth = 1;

  const myFlat = (myEl, myDepth) => {
    console.log(myEl, myDepth, "");

    for (const myElEl of myEl) {
      if (myDepth <= n) {
        console.log(myElEl);
        if (typeof myElEl === "number") {
          result.push(myElEl);
          continue;
        }

        if (myDepth === n) {
          console.log(myElEl);
          result.push(myElEl);
        }
        console.log(myElEl);
        console.log(myDepth, n);
        // if (myDepth > n) continue;

        myFlat(myElEl, myDepth + 1);
      }
    }
  };

  for (const el of arr) {
    if (typeof el === "number") {
      result.push(el);
      continue;
    }
    // depth++;
    myFlat(el, depth);

    depth = 1;
  }

  return result;
};
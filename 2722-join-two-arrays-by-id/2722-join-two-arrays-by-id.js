/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = new Map();

  for (const el of arr1) {
    result.set(el.id, el);
  }

  for (const el of arr2) {
    if (result.has(el.id)) {
      const merged = { ...result.get(el.id), ...el };
      result.set(el.id, merged);
    } else {
      result.set(el.id, el);
    }
  }

  return Array.from(result.values()).sort((a, b) => a.id - b.id);
};
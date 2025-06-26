var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const normalize = (str) =>
    [...str.toLowerCase()].filter((c) => c >= "a" && c <= "z");

  const sArr = normalize(s);
  const tArr = normalize(t);
  const counter = {};

  for (const c of sArr) {
    counter[c] = (counter[c] || 0) + 1;
  }

  for (const c of tArr) {
    if (!counter[c]) return false;

    counter[c] -= 1;
  }

  return true;
};
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const hash = {};

  for (const char of s) {
    const lower = char.toLowerCase();
    if (lower.charCodeAt() < 97 || lower.charCodeAt() > 122) continue;

    if (!hash[lower]) {
      hash[lower] = 1;
      continue;
    }

    if (hash[lower]) {
      hash[lower] += 1;
    }
  }

  for (const char of t) {
    const lower = char.toLowerCase();

    if (hash[lower] < 0) return false;

    if (hash[lower]) {
      hash[lower] -= 1;
    }
  }

  const hashArray = Object.values(hash);

  return hashArray.every((count) => count <= 0);
};

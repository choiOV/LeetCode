/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteHash = {};
  const maragzineHash = {};

  for (const char of ransomNote) {
    ransomNoteHash[char]
      ? (ransomNoteHash[char] += 1)
      : (ransomNoteHash[char] = 1);
  }

  for (const char of magazine) {
    maragzineHash[char]
      ? (maragzineHash[char] += 1)
      : (maragzineHash[char] = 1);
  }

  for (const key in ransomNoteHash) {
    if (!maragzineHash[key] || ransomNoteHash[key] > maragzineHash[key])
      return false;
  }

  return true;
};
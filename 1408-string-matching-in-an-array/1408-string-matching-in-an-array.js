/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const newWords = [...words.sort((a, b) => a.length - b.length)];
  const subStringArray = [];

  newWords.forEach((word, i, a) => {
    while (i < newWords.length - 1) {

      if (a[i + 1]?.includes(word)) {
        subStringArray.push(word);
      }

      i++;
    }
  });
  const result = new Set(subStringArray);
  
  return [...result];
};
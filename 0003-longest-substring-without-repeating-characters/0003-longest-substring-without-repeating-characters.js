/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const last = new Map(); 
  let left = 0;           
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    
    if (last.has(ch) && last.get(ch) >= left) {
      left = last.get(ch) + 1;
    }

    last.set(ch, right);             
    best = Math.max(best, right - left + 1);
  }

  return best;
};
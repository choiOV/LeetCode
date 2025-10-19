/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 해답을 일부 참고한 풀이
  candidates.sort((a, b) => a - b);
  const results = [];
  const path = [];

  function dfs(startIndex, remain) {
    if (remain === 0) {
      results.push([...path]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      const num = candidates[i];

      if (num > remain) break;
      path.push(num);
      dfs(i, remain - num);

      path.pop();
    }
  }

  dfs(0, target);

  return results;
};